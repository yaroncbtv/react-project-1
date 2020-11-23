import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = props => {
    const NavbarStyle = {
        display: "flex",
        justifyContent: 'center',
        fontWeight: 'bold'
        
      };
    
    return(
  <Navbar style={NavbarStyle} bg="dark" variant="dark">
    <Navbar.Brand style={{color:'#FFCE00'}} href="#home">
      {/* <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '} */}
      NOTES APP BY Y.C DEVELOPER
    </Navbar.Brand>
  </Navbar>
    )
    
}

export default Header;