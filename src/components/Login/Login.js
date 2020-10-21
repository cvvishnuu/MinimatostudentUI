import React, { Component } from 'react';
import "./login.css";
import axios from 'axios';
import { Redirect } from 'react-router';

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

    componentDidMount(){
        this.checkStore();
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
                    }else{
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
       
        return(
            <div>
                <h2>Login</h2>
                <form>
                    <div>
                        <input 
                            type = "email"
                            name="email"
                            required
                            placeholder = "  Email"
                            onChange={this.onEmailchange} 
                        />
                    </div>
                   <div>
                       <input
                            type = "password"
                            placeholder = "  Password"
                            required
                            onChange={this.onPasswordChange}                             
                        />
                   </div>
                   <div>
                        <input 
                            type="submit"
                            value="submit"
                            onClick={this.onSubmit}                                
                        />
                   </div>
                </form>
            </div>  
        )
    }
}

export default Login;