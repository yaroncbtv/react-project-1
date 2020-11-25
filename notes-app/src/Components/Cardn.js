import React from 'react';
import Card from 'react-bootstrap/Card';
import firebase from 'firebase';
import Model2 from './Modal2';
import ModalPopUp from './ModalPopUp';

class Cardn extends React.Component {
   constructor(props){
       super(props);
       this.state = {
        id: this.props.notes.id,
        titel: this.props.notes.titel,
        note: this.props.notes.note,
        date: this.props.notes.date
        
    };
      this.removeNote = this.removeNote.bind(this);
  };

  
   removeNote(id){
    firebase.database().ref('notes').child(id).remove()
   }
   
   


   render() { 
       
        return ( 
        <div>
              <h2 style={{marginBottom:'15px',marginTop:'15px'}}>Your Notes</h2>
                {
                    this.props.notes.map(note => {
                        return(
<>                      
                        <Card style={{marginBottom:'20px'}} key={note.id}>
                        <Card.Header style={{display:'flex', justifyContent:'space-between'}}><span>Create Date: <br/>{note.date}</span>
                        <div>
                        
                        <ModalPopUp popUpCard = {note}/>
                        
                        <Model2 removeNote = {() => this.removeNote(note.id)}/>
                       
                        </div>
                        </Card.Header>
                        <Card.Body>
                        <Card.Title>{note.title}</Card.Title>
                        <Card.Text>
                           {note.note}
                        </Card.Text>
                        </Card.Body>
                        </Card>
                        
                        </>
                        )
                  
                    })
                    
                }
                
        </div>
        );
    }
    
}
 
export default Cardn;