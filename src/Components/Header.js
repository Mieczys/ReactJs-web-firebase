import React from 'react';
import Menu from '../Components/Menu'
import Wbuy from '../Includes/Images/wbuy.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'



function Header() {
    return (

            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home"><img src={Wbuy} className='App-logo' alt='logo' /></Navbar.Brand>
                <h1>Bienvenidos a Wbuy</h1>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Menu />
                </Nav>
                </Navbar.Collapse>
            </Navbar>
                

    );
}
export default Header;
