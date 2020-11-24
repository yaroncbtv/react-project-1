import React from 'react';
import Card from 'react-bootstrap/Card';
import firebase from 'firebase';
import Model2 from './Modal2';


class Cardn extends React.Component {
   constructor(props){
       super(props);
  
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
                        <Card.Header style={{display:'flex', justifyContent:'space-between'}}><span>Create Date: {note.date}</span>
                        {/* <button onClick={() => this.removeNote(note.id)} style={{color:'red'}} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button> */}
                        <Model2 removeNote = {() => this.removeNote(note.id)}/>
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