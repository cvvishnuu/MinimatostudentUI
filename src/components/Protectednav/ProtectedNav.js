import React, { useState,useEffect } from 'react';
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
    const [b64, setB64] = useState();
    const [mimeType, setMimeType] = useState();
    // const { b64, mimeType } = imageInfo;
    const imageInfo = JSON.parse(localStorage.getItem('Image'));

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem('id'));
        const imageInfo = JSON.parse(localStorage.getItem('Image'));
        if(!imageInfo) {
            axios.get('http://localhost:5000/student/getImage', {
                headers : {
                    id: id
                },
            })
            .then(res => {
                // console.log(res.data.payload);
                // this.setState({
                //     b64: res.data.payload.b64,
                //     mimeType: res.data.payload.mimeType
                // })
                setB64(res.data.payload.b64);
                setMimeType(res.data.payload.mimeType)
                localStorage.setItem("Image", JSON.stringify({
                    b64: res.data.payload.b64,
                    mimeType: res.data.payload.mimeType
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
                        </NavDropdown>
                    :
                        (b64)?
                        <NavDropdown 
                            title = {<img 
                                src = {`data:${mimeType};base64,${b64}`} 
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