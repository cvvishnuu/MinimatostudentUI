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

const Header = () => {
     const userInfo = JSON.parse(localStorage.getItem('User'));
     const imageInfo = JSON.parse(localStorage.getItem('Image'));
     const { name } = userInfo;
     // const { b64, mimeType } = imageInfo;
     return (
          <div className = "header-container"  >
              <Navbar expand="sm ">
                  <Navbar.Brand className = "minimato-title" style={{color: "black", fontSize: "30px"}}>MiniMato</Navbar.Brand>
                  <Search />
                  <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                         {
                              (imageInfo)?
                              <NavDropdown 
                                   title = {<img 
                                        src = {`data:${imageInfo.mimeType};base64,${imageInfo.b64}`} 
                                        style = {{
                                             borderRadius: "50%", 
                                             height: "50px",
                                             width: "50px"
                                        }} />}                                    
                              >
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
                              </NavDropdown> :
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
                         }                         
                    </Nav>
                  </Navbar.Collapse>
               </Navbar> 
               <hr/>
          </div>
      );   
}
 
export default Header;