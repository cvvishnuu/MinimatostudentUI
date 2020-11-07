import React, { Component } from 'react';
import axios from 'axios';
import "./signup.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            phoneNumber: '',
            gender: '',
            password: '',
            confirmPassword: '',
            errorMessage: "This field should not be empty",
            flag:false
        }
    }

    onNameChange = (event) => {
        this.setState({
            fullName: event.target.value
        })
    }

    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    onPhoneNumberChange = (event) => {
        this.setState({
            phoneNumber:event.target.value
        })
    }

    onGenderChange = (value) => {
        this.setState({
            gender: value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    onConfirmPassword = (event) => {
        this.setState({
            confirmPassword: event.target.value
        })
    }
   
    onSubmit = (event) => {
        event.preventDefault();
        const { fullName, email, phoneNumber, gender, password, confirmPassword } = this.state;
        try {
            if(fullName === '') {
                alert("The input fields are empty");
            }
            else if(email === '') {
                alert("The input fields are empty");
            } 
            else if(phoneNumber === '') {
                alert("The input fields are empty");
            }
             else if(password === '') {
                console.log(this.state)
                alert("The input fields are empty");
            } 
            else if(confirmPassword === '') {
                alert("The input fields are empty");
            } 
            else if (gender === '') {
                alert("The input fields are empty");
            } else {
                if(password === confirmPassword) {
                    axios.post('http://localhost:5000/student/signup', {
                        clientName: fullName,
                        email:email,
                        gender:gender,
                        phoneNumber: phoneNumber,
                        password: password,
                    }).then(res => {
                        if(res.data.confirm === 'success') {
                            console.log(res);
                            alert("You have successfully registered. Kindly login to your account.");
                        } else {
                            alert("An error occured. Kindly try again later");
                        }
                    })
                } else {
                    alert("Password didnt match")

                }
            }
        } catch(error) {
            alert("sorry there has been an error")

        }
    }

    render() {
        return(
            // <div className = "signup-container">
            //     <h2>Signup</h2>
            //     <form>
            //         <div>
            //             <input 
            //                 onChange = {this.onNameChange} 
            //                 type = "text" 
            //                 placeholder = "FullName" 
            //             />   
            //         </div>
            //         <div>
            //             <input 
            //                 onChange = {this.onEmailChange} 
            //                 type = "text" 
            //                 placeholder = "Email"                               
            //             />
            //         </div>
            //         <div>
            //             <input 
            //                 onChange = {this.onPhoneNumberChange} 
            //                 type = "text" 
            //                 placeholder = "Phone no" 
            //             />
            //         </div>
            //             <label>Gender</label>
            //             <div>
            //                 <input 
            //                     type="radio" 
            //                     id="male" 
            //                     name="gender" 
            //                     value="male"
            //                     onChange = {() => {this.onGenderChange("male")}}                          
            //                 />
            //                 <label>Male</label>
            //                 <input 
            //                     type="radio" 
            //                     id="female" 
            //                     name="gender" 
            //                     value="female"
            //                     onChange = {() => {this.onGenderChange("female")}}                                  
            //                 />
            //                 <label>Female</label>
            //             </div>
            //         <div>
            //             <input 
            //                 onChange = {this.onPasswordChange} 
            //                 type = "password" 
            //                 placeholder = "Password" 
            //             />
            //         </div>
            //         <div>
            //             <input 
            //                 type = "password" 
            //                 placeholder = "Confirm Password"
            //                 onChange = {this.onConfirmPassword} 
            //             />
            //         </div>
            //         <input  
            //             onClick = {this.onSubmit} 
            //             type = "submit"
            //             value = "submit" 
            //         />
            //     </form>
            // </div>  
            <Form>
                <h2 style = {{textAlign: "center"}} id = "signup-logo" >Signup</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"  onChange = {this.onNameChange} placeholder="Enter Name" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onChange={this.onEmailChange} placeholder="Enter email" />
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control onChange={this.onPhoneNumberChange} type="tel" placeholder="Phone Number" />
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
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={this.onPasswordChange} type="password" placeholder="Password" />
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onChange={this.onConfirmPassword} type="password" placeholder="confirm Password" />
                </Form.Group>
                <Button onClick={this.onSubmit} variant="danger" type="submit">
                    Signup
                </Button>
            </Form>
        )
    }
}

export default Signup;