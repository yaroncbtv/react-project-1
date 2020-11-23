import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Cardn from './Cardn'
import 'bootstrap/dist/css/bootstrap.min.css';

class NoteAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
       
        <div>
       <Cardn/>
asdasd
        </div>
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
        
      }
    
    
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control value={this.state.value} onChange={this.handleChange} as="textarea" rows={3} />
                    </Form.Group>
                    <Button onClick={this.handleSubmit} variant="primary" size="lg" block>
                    Add
                    </Button>  
                </Form>
               
            </div>



        );
    }
}

export default NoteAdd;