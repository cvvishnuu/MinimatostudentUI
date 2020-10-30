import React, { Component } from 'react';
import "./login.css";
import axios from 'axios';
import { Redirect } from 'react-router';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage:'',
            isAuthenticated:false
        }
    }
 
    checkStore(){
        const store =JSON.parse(localStorage.getItem('Authorization'));
        if(store){
            this.setState({
                isAuthenticated:true
            })
        }
    }
    
    onEmailchange = (event)=>{
        this.setState({email:event.target.value})
    }
    onPasswordChange = (event)=>{
        this.setState({password:event.target.value})
    }
    onSubmit = (event) => {
        event.preventDefault();
        const {email,password}=this.state;
        try{
            if (email === '' || password === ''){
                alert("The input fields are empty")
            } else {
                axios.post('http://localhost:5000/student/login',{email:email,password:password},{withCredentials:true})
                .then(res=>{
                    if(!res.data.success){
                        this.setState({errorMessage:"Incorrect Email ot Password"})
                    } else {
                        const token = JSON.stringify(res.data.token);
                        localStorage.setItem('Authorization',token);
                        this.checkStore();
                    }

                }).catch(err =>{
                    alert("sorry there has been an error");
                })
            }
        } catch(error){

            alert("sorry there has been an error");
        }
    }
    render() {
       if (this.state.isAuthenticated) {
           return <Redirect to = '/protected/dashboard' />
       }
        return(
            // <div>
            //     <h2>Login</h2>
            //     <form>
            //         <div>
            //             <input 
            //                 type = "email"
            //                 name="email"
            //                 required
            //                 placeholder = "  Email"
            //                 onChange={this.onEmailchange} 
            //             />
            //         </div>
            //        <div>
            //            <input
            //                 type = "password"
            //                 placeholder = "  Password"
            //                 required
            //                 onChange={this.onPasswordChange}                             
            //             />
            //        </div>
            //        <div>
            //             <input 
            //                 type="submit"
            //                 value="submit"
            //                 onClick={this.onSubmit}                                
            //             />
            //        </div>
            //     </form>
            // </div>  
            <Form>
                <h2 style = {{textAlign: "center"}} >Login</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onChange={this.onEmailchange} placeholder="Enter email" />
                    <Form.Text   className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={this.onPasswordChange} type="password" placeholder="Password" />
                </Form.Group>
                <Button onClick={this.onSubmit} variant="danger" type="submit">
                    Login
                </Button>
            </Form>
        )
    }
}

export default Login;