import React, {Component} from 'react'
import {
    Button,
    Form,
    Grid,
    Message,
    Segment,
  } from 'semantic-ui-react';
  import { NavLink, withRouter } from 'react-router-dom';


class Login extends Component{
    state = {}
  

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    logIn = (e) => {
        e.preventDefault()
        

        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res =>  res.json())
        .then(userInfo => 
            {
                console.log(userInfo)
            localStorage.token = userInfo.token 
            localStorage.user = this.state.username 
            if (localStorage.token !== "undefined"){
                this.props.history.push("/navMap") 
            }
            
        }
        )
        
    }
   
    render(){
        const { username, password } = this.state
        return(
      
        <div className="signup-bg-img">
            <Grid centered columns={2}>
                <Grid.Column style={{position: 'absolute', top:'10%', left: '35%'}}>
                    <div id="login-image-container">
                        <div id="form-container">
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/>
                            <img className="signup_img" src={require('./images/username.png')}/>
                                <form>
                                <input type="text" name="username" onChange={(e) => this.handleChange(e)} value={username}></input>
                                        <br/>
                                        <br/>
                                    <img className="signup_img" src={require('./images/password.png')}/>
                                    <input type="password" name="password" onChange={(e) => this.handleChange(e)} value={password}></input>
                                        <br/>
                                        <br/>
                                     <img className="yellowbutton" src={require('./images/submitbutton.png')} onClick={(e) => this.logIn(e)}/>
                                     <br/>
                                     <br/>
                                     <NavLink
                                        to="/signup"
                                        exact
                                        
                                        activeStyle={{
                                            background: 'darkblue'
                                        }}
                                        > <img className="yellowbutton" src={require('./images/signupbutton.png')}/> 
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


export default withRouter(Login)

{/* <Grid centered columns={2}>
            <Grid.Column style={{position: 'absolute', left: '35%'}}>
                    
            <Segment style={{width: '500px'}}>
                <Form size="large" onSubmit={(e) => this.logIn(e)} >
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="User Name"
                        name="username"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Button color="grey" fluid size="large">
                        Login
                    </Button>
                </Form>
            
                <Message>
                    Not registered yet? 
                    <NavLink
                    to="/signup"
                    exact
                    
                    activeStyle={{
                        background: 'darkblue'
                    }}
                    > Signup</NavLink>
                </Message>
            
            </Segment>
            
            </Grid.Column>
        </Grid> */}