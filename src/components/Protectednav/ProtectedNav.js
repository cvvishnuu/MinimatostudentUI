import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './ProtectedNav.css'


class ProtectedNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    onLogout =()=>{
        localStorage.clear()
    }

    render() { 
        return (
            <div className = "authNav-container">
                <Navbar expand="sm ">
                    <Navbar.Brand style={{color: "white", fontSize: "x-large"}}>MiniMato</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavDropdown title = "Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item>View Profile</NavDropdown.Item>
                            <NavDropdown.Item>Order Summary</NavDropdown.Item>
                                <NavDropdown.Item onClick={this.onLogout}>
                                    <Link to = '/'>
                                        Logout
                                    </Link>
                                </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar> 
            </div>
        );        
    }
}
 
export default ProtectedNav;