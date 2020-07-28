import React, {Component} from 'react'
import "./styles.css"
import {
    Button,
    Form,
    Grid,
    Segment,
  } from 'semantic-ui-react';
  import { NavLink} from 'react-router-dom';

class SignUp extends Component{
    state = {}

    handleSubmit = () => this.setState({ first_name: '', last_name: '', password: '', username: '', email: ''})

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
              
                first_name: this.state.first_name,
                last_name: this.state.last_name,   
                username: this.state.username, 
                email: this.state.email, 
                password: this.state.password
               
            })
        })
        .then(res => res.json())
        .then(userInfo => 
            {
                console.log(userInfo)
            if (localStorage.user !== "undefined")
            this.props.history.push("/login") 
        }
        )
        
    }
   
    render(){
        const { username, password, email, first_name, last_name } = this.state
        return(
        
            <div className="signup-bg-img">
                
            <Grid centered columns={2}>
                <Grid.Column style={{position: 'absolute', top:'10%', left: '35%'}}>
                    <div id="image-container">
                        <div id="form-container">
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/>
                            <img className="signup_img" src={require('./images/first_name.png')}/>
                                <form>
                                    <input type="text" name="first_name" onChange={(e) => this.handleChange(e)} value={first_name}></input>
                                        <br/>
                                        <br/>
                                    <img className="signup_img" src={require('./images/last_name.png')}/>
                                    <input type="text" name="last_name" onChange={(e) => this.handleChange(e)} value={last_name}></input>
                                        <br/>
                                        <br/>
                                    <img className="signup_img" src={require('./images/email.png')}/>
                                    <input type="text" name="email" onChange={(e) => this.handleChange(e)} value={email}></input>
                                        <br/>
                                        <br/>
                                    <img className="signup_img" src={require('./images/username.png')}/>
                                    <input type="text" name="username" onChange={(e) => this.handleChange(e)} value={username}></input>
                                        <br/>
                                        <br/>
                                    <img className="signup_img" src={require('./images/password.png')}/>
                                    <input type="password" name="password" onChange={(e) => this.handleChange(e)} value={password}></input>
                                        <br/>
                                        <br/>
                                     <img src={require('./images/submitbutton.png')} onClick={(e) => this.signUp(e)}/> 
                                  
                                        <NavLink
                                            to="/"
                                            > 
                                            <img src={require("./images/signup_back.png")}></img> 
                                        </NavLink> 
                                     </form>
                
                                </div>
                            </div>
                </Grid.Column>
            </Grid>
        
        </div>
        )
    }
}

export default SignUp


