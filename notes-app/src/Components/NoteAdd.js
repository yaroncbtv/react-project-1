import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';
class NoteAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titel: '',
            note:'',
            date:''
            
        };
        this.createNote = this.createNote.bind(this);
      }
    handleChange (event, key){
        this.setState({
            [key]: event.target.value
        })
    }
    createNote(){
        if(this.state.note !== '' && this.state.titel !== ''){
            firebase.database().ref('notes').push({
                titel: this.state.titel,
                note:this.state.note,
                date: new Date().toLocaleString()
            })
        }
    }  
    render() {
        return (
            <div>   
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label></Form.Label>
                        <Form.Control value={this.state.titel} onChange={(event) => this.handleChange(event, 'titel')} style={{marginBottom: "15px"}} type="text" placeholder="Titel note" />
                        <Form.Control value={this.state.note} onChange={(event) => this.handleChange(event, 'note')} as="textarea" rows={6} placeholder="Your note..."/>
                    </Form.Group>
                    <Button onClick={this.createNote} variant="primary" size="lg" block>
                    Add note
                    </Button>  
                </Form>
             
            </div>



        );
    }
}

export default NoteAdd;