import React, { Component } from 'react';
import "./Navigation.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "react-responsive-modal/styles.css";
import {Modal}  from "react-responsive-modal";
import Signup from '../Signup/Signup';
import Login from '../Login/Login.js';

class Naviagtion extends Component{
    constructor () {
        super();
        this.state = {
            signup: false,
            login: false,
            
        }
    }
    onOpenSignupModal = () => {
        this.setState({ signup: true });
    }
    
    onOpenLoginModal = () => {
        this.setState({ login: true });
    }

    onCloseSignupModal = () => {
        this.setState({ signup: false });
        console.log(this.state.signup)
    }
    
    onCloseLoginModal = () => {
        this.setState({ login: false })
    }
    
    render() {
        const { signup , login} = this.state;
        return (
            <div>
                <div className = "navigation-container">
                    <Navbar collapseOnSelect expand="sm"  variant="dark">
                        <Navbar.Brand style = {{color: "white", fontSize: "x-large", }}>MiniMato</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className = "justify-content-end" >
                            <Nav>
                                <Nav.Link onClick = {this.onOpenLoginModal} style = {{padding: "15px", marginRight: "2vw", fontSize: "x-large", color: "white"}} eventKey={3}>
                                    Login
                                </Nav.Link>
                                <Nav.Link onClick = {this.onOpenSignupModal} style = {{padding: "15px", fontSize: "x-large", color: "white"}} eventKey={2}>
                                    Signup
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                    <Modal open = {signup} onClose = {this.onCloseSignupModal} >
                        <Signup />
                    </Modal>
                    <Modal open = {login} onClose = {this.onCloseLoginModal} >
                        <Login />
                    </Modal>
            </div>  
        )
    }
}
    


export default Naviagtion;