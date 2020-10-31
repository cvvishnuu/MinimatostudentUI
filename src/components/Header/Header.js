import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
require('./header.css');

const onLogout = () => {
     localStorage.clear()
 }

const ProfileHeader = () => {
     const userInfo = JSON.parse(localStorage.getItem('User'));
    const { name } = userInfo;
     return (
          <div className = "header-container"  >
              <Navbar expand="sm ">
                  <Navbar.Brand className = "minimato-title" style={{color: "black", fontSize: "30px"}}>MiniMato</Navbar.Brand>
                  <Search />
                  <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                         <NavDropdown title = {`Hi ${name}`} id="basic-nav-dropdownn">
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
               <hr/>
          </div>
      );   
}
 
export default ProfileHeader;