import React, {Component} from 'react'
import "./styles.css"
import {
    Button,
    Form,
    Grid,
    Segment,
  } from 'semantic-ui-react';
  import { NavLink, withRouter} from 'react-router-dom';

class SignUp extends Component{
    state = {}

    handleSubmit = () => this.setState({ password: '', username: '', email: ''})

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
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then(console.log)
        this.props.history.push("/login");
    }
   
    render(){
        const { username, password, email } = this.state
        return(
            
        <div className="Login_Div bg-img">
            
        <Grid centered columns={2}>
            <Grid.Column style={{position: 'absolute', left: '35%'}}>
                    <img className="logo" src={require('./logo.png')} alt="logo"></img>
              
            <Segment style={{width: '500px'}}>
                <Form size="large">
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="E-mail"
                        name= "e-mail"
                        value={email}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="User Name"
                        name= "username"
                        value={username}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                        name= "password"
                        value={password}
                        onChange={(e) => this.handleChange(e)}
                    />
        
                    <Button color="gray" fluid size="large" onClick={(e) => this.signUp(e)} >
                        Sign Up 
                    </Button>
                    <br/>
                    <NavLink
                        to="/login"
                        exact
                        
                        activeStyle={{
                            background: 'darkblue'
                        }}
                    > 
                        <Button color="gray" fluid size="large" >
                            Log In
                        </Button>

                    </NavLink>
                </Form>
            </Segment>
            
            </Grid.Column>
        </Grid>
        </div>
        )
    }
}

export default withRouter(SignUp)

