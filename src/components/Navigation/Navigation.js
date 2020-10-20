import React from 'react';
import "./Navigation.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Naviagtion = () =>  {
    return (
        <div className = "navigation-container">
            <Navbar collapseOnSelect expand="sm"  variant="dark">
                <Navbar.Brand style = {{color: "white", fontSize: "x-large", }}>MiniMato</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className = "justify-content-end" >
                    <Nav>
                        <Nav.Link style = {{padding: "15px", marginRight: "2vw", fontSize: "x-large", color: "white"}} eventKey={3}>Login</Nav.Link>
                        <Nav.Link style = {{padding: "15px", fontSize: "x-large", color: "white"}} eventKey={2}>
                            Signup
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Naviagtion;