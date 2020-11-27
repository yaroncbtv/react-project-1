import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NoteAdd from './Components/NoteAdd'
import Header from './Components/Header'
import Cardn from './Components/Cardn'

import firebase from 'firebase';
class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
      notes: []
    }
  }
  
  componentDidMount(){
    this.db = firebase.database();

    this.listenForChange();
  }
  listenForChange(){
    this.db.ref('notes').on('child_added', snapshot =>{
      let note = {
        id: snapshot.key,
        title: snapshot.val().titel,
        note: snapshot.val().note,
        date: snapshot.val().date
      }
     
      let notes = this.state.notes;
      notes.push(note);
      this.setState({
        notes: notes
      });
    });

    this.db.ref('notes').on('child_removed', snapshot =>{
      
      let notes = this.state.notes;
      notes = notes.filter(note => note.id !== snapshot.key)

      this.setState({
        notes: notes
      });
    });

    this.db.ref('notes').on('child_changed', snapshot =>{
      const title1 =  snapshot.child("titel").val();
      const note1 =  snapshot.child("note").val();
      
      let notes = this.state.notes;
      let notesUpdate = this.state.notes;
      notesUpdate.map(note => {
        if(note.id === snapshot.key){
              note.title = title1
              note.note = note1
              note.date = new Date().toLocaleString("he-IL") + ' (Update)'
        }
    })
    });

  }
  render(){
    
    return (
      <div className="App">
        <Header/>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="4">
              <NoteAdd/>
            </Col>
          </Row>
          <Row >
            <Col>
            <Cardn notes={this.state.notes}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
}

export default App;
