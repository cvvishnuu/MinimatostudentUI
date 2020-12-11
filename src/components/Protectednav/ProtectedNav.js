import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import { Link } from 'react-router-dom';
require('./ProtectedNav.css');



const onLogout = () => {
    localStorage.clear()
}

const ProtectedNav = (props) => {
    const { name } = props;
    const imageInfo = JSON.parse(localStorage.getItem('Image'));

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('Authorization'))
        const imageInfo = JSON.parse(localStorage.getItem('Image'));
        if(!imageInfo) {
            axios.get('http://localhost:5000/student/getImage', {
                headers : {
                    Authorization: token
                },
            })
            .then(res => {                        
                localStorage.setItem("Image", JSON.stringify({
                    url: res.data.payload.url
                }))
            })
        } 
    }, [])
    return (
        <div className = "authNav-container">
            <Navbar expand="sm ">
                <Navbar.Brand className = "protectednav-title" style={{color: "white", fontSize: "x-large"}}>MiniMato</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav >
                    {
                        (imageInfo)?
                            <NavDropdown 
                            title = {
                                <img 
                                    src = {`http://localhost:5000${imageInfo.imageUrl}`} 
                                    style = {{
                                            borderRadius: "50%", 
                                            height: "50px",
                                            width: "50px"
                                    }}
                                    alt = "profile"    
                                />}                     
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
                        </NavDropdown>
                    :
                        
                        <NavDropdown title = {`Hi ${name}`} id="basic-nav-dropdown">
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
        </div>
    );        
}
 
export default ProtectedNav;