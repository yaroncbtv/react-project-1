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
      NOTES APP BY Y.C DEVELOPER
    </Navbar.Brand>
  </Navbar>
    )
    
}

export default Header;