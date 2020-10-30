import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
require('./ProtectedNav.css');


const onLogout = () => {
    localStorage.clear()
}

const ProtectedNav = (props) => {
    const { name } = props;
    return (
        <div className = "authNav-container">
            <Navbar expand="sm ">
                <Navbar.Brand className = "protectednav-title" style={{color: "white", fontSize: "x-large"}}>MiniMato</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavDropdown  title = {`Hi ${name}`}  id="basic-nav-dropdown">
                        <NavDropdown.Item as = {Link} to='/protected/dashboard'>
                            Dashboard
                        </NavDropdown.Item>
                        <NavDropdown.Item as = {Link} to='/protected/viewprofile'>
                            View Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            Order Summary
                        </NavDropdown.Item>
                        <NavDropdown.Item as = {Link} to='/' onClick = {onLogout}>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar> 
        </div>
    );        
}
 
export default ProtectedNav;