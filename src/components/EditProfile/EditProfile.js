import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            gender:'',
            address:''
         }
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    onPhoneNumberChange = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }

    onGenderChange = (value) => {
        this.setState({
            gender: value
        })
    }

    onAddressChange = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    onUpdate = (event) => {
        event.preventDefault();
        const { name, email, phoneNumber, gender, address } = this.state;
        try {
            if(name === '' && email === '' && phoneNumber === '' && gender === '' && address === '') {
                alert("All the input fields are empty. Please fill atleast one to edit your details");
            } else {
                Axios.put('http://localhost:5000/')
            }
        } catch (error) {
            
        }
    }

    render() {
        const {name, email, phoneNo, address } = this.props;
        return(
            <Form>
                <h3 style = {{textAlign: "center"}} >Edit Profile Information</h3>
                <Form.Group >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text"  onChange = {this.onNameChange} placeholder = {name} />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onChange={this.onEmailChange} placeholder = {email} />
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control onChange={this.onPhoneNumberChange} type="tel" placeholder = {phoneNo} />
                    <Form.Label>Gender</Form.Label>
                        <Form.Group>
                            <Form.Check
                                type="radio"
                                label="Male"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                onChange = {() => {this.onGenderChange("male")}}
                            />
                            <Form.Check
                                type="radio"
                                label="Female"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                onChange = {() => {this.onGenderChange("female")}}
                            />
                        </Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text"  onChange = {this.onAddressChange} placeholder = {address} />
                </Form.Group>
                <Button onClick={this.onUpdate} variant="danger">
                    Update
                </Button>
            </Form>
        )
    }
}

export default EditProfile;