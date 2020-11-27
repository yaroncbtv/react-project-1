import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';


import Form from 'react-bootstrap/Form';

class ModalPopUp extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            setShow: false,
            date: new Date().toLocaleString("he-IL"),
            id: this.props.popUpCard.id,
            note: this.props.popUpCard.note,
            title: this.props.popUpCard.title
        }
    }

    handleClose = () => this.setState({setShow: false})
    handleShow = () => this.setState({setShow: true})
 
handleChange (event, key){
    this.setState({
        [key]: event.target.value
    })
    
}
onTrigger = (event) => {
    
    if(this.state.note === ''){
      this.setState({note: this.props.popUpCard.note})
    }
    if(this.state.title === ''){
      this.setState({title: this.props.popUpCard.title})
    }
    
    this.props.parentCallback(this.state);
    this.handleClose()
    event.preventDefault();
}


    render(){
        return (
            <>
              <Button variant="secondary" onClick={this.handleShow}>
              Edit
              </Button>
                {this.handleShow}
              <Modal show={this.state.setShow} onHide={this.handleShow} animation={true}>
                <Modal.Header style={{marginBottom:'10px'}} closeButton onClick={this.handleClose}>
                  <Modal.Title> Your title: {this.props.popUpCard.title}</Modal.Title>
        
                  </Modal.Header>
            <Form>
                <Form.Control 
                onChange={(event) => this.handleChange(event, 'title')} 

                type="text" placeholder="Change title" />
                
            </Form>
            
                <Modal.Body>
                    Your note: {this.props.popUpCard.note}
                    </Modal.Body>
                <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control 
                onChange={(event) => this.handleChange(event, 'note')} 
                placeholder="Change note" as="textarea" rows={3} />
                </Form.Group>
                <span>Created: {this.props.popUpCard.date}</span>
            </Form>
                <Modal.Footer>
                  <Button variant="danger" onClick={this.handleClose} >
                  Cancel
                  </Button>
                  <Button variant="warning"  onClick = {this.onTrigger}> 
                  Change
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          );
    }


  
  }

  export default ModalPopUp;