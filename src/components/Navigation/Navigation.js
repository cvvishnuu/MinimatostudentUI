import React, { Component } from 'react';
import "./Navigation.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "react-responsive-modal/styles.css";
import {Modal}  from "react-responsive-modal";
import Signup from '../Signup/Signup';
import Login from '../Login/Login.js';
import Styles from 'styled-components';
import styled from 'styled-components';

class Naviagtion extends Component {
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
    }
    
    onCloseLoginModal = () => {
        this.setState({ login: false })
    }

    // const Styles = styled.div.navbar-nav .nav-item .nav-link {
    //     &:hover {
    //     color: #fb7840;
    //     }
    // }

    render() {
        const { signup , login } = this.state;
        return (
            <div>
                <div className = "navigation-container">
                    <Navbar collapseOnSelect expand="sm"  variant="dark">
                        <Navbar.Brand style = {{color: "white", fontSize: "x-large", }}>MiniMato</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className = "justify-content-end" >
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link onClick = {this.onOpenLoginModal} style = {{padding: "15px", marginRight: "2vw", fontSize: "x-large", color: "white"}} eventKey={3}>
                                        Login
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link onClick = {this.onOpenSignupModal} style = {{padding: "15px", fontSize: "x-large", color: "white"}} eventKey={2}>
                                        Signup
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                    <Modal open = {signup} onClose = {this.onCloseSignupModal} center
                    styles={{
                        modal: {
                            animation: `${ signup ? 'customEnterAnimation' : 'customLeaveAnimation'
                            } 500ms`,
                        }}}
                        classNames={{
                            modal: 'customModalSignup'
                        }}
                    >
                        <Signup />
                    </Modal>
                    <Modal open = {login} onClose = {this.onCloseLoginModal} center
                        styles={{
                        modal: {
                            animation: `${ login ? 'customEnterAnimation' : 'customLeaveAnimation'
                            } 500ms`,
                        }}}
                        classNames={{
                            modal: 'customModal'
                        }}
                    >
                        <Login />
                    </Modal>
            </div>  
        )
    }
}
    


export default Naviagtion;