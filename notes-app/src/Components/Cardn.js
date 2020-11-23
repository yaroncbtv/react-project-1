import React from 'react';
import Card from 'react-bootstrap/Card';
import firebase from 'firebase';
class Cardn extends React.Component {
   constructor(props){
       super(props);
   }
    
   removeNote(id){
       firebase.database().ref('notes').child(id).remove();
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
                        <Card.Header>Create Date: {note.date}
                        <button onClick={() => this.removeNote(note.id)} style={{color:'red'}} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
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