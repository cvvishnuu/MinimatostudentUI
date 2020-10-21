import React, { Component } from 'react';
import axios from 'axios';
import "./signup.css";

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
            errorMessage: "This field should not be empty"
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

    onGenderChange = (event) => {
        this.setState({
            gender: event.target.value
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
            } else if(email === '') {
                alert("The input fields are empty");
            } else if(phoneNumber === '') {
                alert("The input fields are empty");
            } else if(password === '') {
                alert("The input fields are empty");
            } else if(confirmPassword === '') {
                alert("The input fields are empty");
            } else if (gender === '') {
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
                        console.log(res);
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
            <div>
                <h2>Signup</h2>
                <form>
                    <div>
                        <input 
                            onChange = {this.onNameChange} 
                            type = "text" 
                            placeholder = "FullName" 
                        />
                           
                    </div>
                    <div>
                        <input 
                            onChange = {this.onEmailChange} 
                            type = "text" 
                            placeholder = "Email"                               
                        />
                    </div>
                    <div>
                        <input 
                            onChange = {this.onPhoneNumberChange} 
                            type = "text" 
                            placeholder = "Phone no" 
                        />
                    </div>
                        <label>Gender</label>
                        <div>
                            <input 
                                type="radio" 
                                id="male" 
                                name="gender" 
                                value="male"                          
                            />
                            <label>Male</label>
                            <input 
                                type="radio" 
                                id="male" 
                                name="gender" 
                                value="female"                                  
                            />
                            <label>Female</label>
                        </div>
                    <div>
                        <input 
                            onChange = {this.onConfirmPassword} 
                            type = "password" 
                            placeholder = "Password" 
                        />
                    </div>
                    <div>
                        <input 
                            type = "password" 
                            placeholder = "Confirm Password" 
                        />
                    </div>
                    <input 
                        onClick = {this.onSubmit} 
                        type = "submit"
                        value = "submit" 
                    />
                </form>
            </div>  
        )
    }
}

export default Signup;