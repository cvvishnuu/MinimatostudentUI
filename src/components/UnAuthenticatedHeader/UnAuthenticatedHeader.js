import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "react-responsive-modal/styles.css";
import { Modal }  from "react-responsive-modal";
import Signup from '../Signup/Signup';
import Login from '../Login/Login.js';
import Search from '../Search/Search';
import './UnAuthenticatedHeader.css';
// import Styles from 'styled-components';
// import styled from 'styled-components';

class UnAuthenticatedHeader extends Component {
    constructor (props) {
        super(props);
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

    render() {
        const canteenDetails = JSON.parse(localStorage.getItem('canteenDetails'));
        const details = canteenDetails.canteenDetails;
        const { signup , login } = this.state;
        return (
            <div>
                <div className = "unauth-navigation-container">
                    <Navbar collapseOnSelect expand="sm"  variant="dark">                        
                        <Navbar.Brand className = "minimato-title" style={{color: "black", fontSize: "30px"}}>
                             MiniMato
                        </Navbar.Brand>
                        <Search {...this.props} details = {details}/>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className = "justify-content-end" >
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link className = "hover-link" onClick = {this.onOpenLoginModal} style = {{padding: "15px", marginRight: "2vw", fontSize: "x-large", color: "black"}} eventKey={3}>
                                        Login
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className = "hover-link" onClick = {this.onOpenSignupModal} style = {{padding: "15px", fontSize: "x-large", color: "black"}} eventKey={2}>
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
                            height: "75vh"
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
    


export default UnAuthenticatedHeader;