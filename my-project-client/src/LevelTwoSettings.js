import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import { Button, Form, Segment, Grid } from 'semantic-ui-react'

class LevelTwoSettings extends React.Component{
    state = {}

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => this.setState({ first_name: '', last_name: '', password: '', username: '', email: ''})

    render(){
        const { firstphrase, secondphrase, thirdphrase } = this.state
        return(
        
            <div>
                
            <Grid centered columns={2}>
                <Grid.Column style={{position: 'absolute', top:'10%', left: '35%'}}>
                    <div>
                        <div id="form-container">
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/>
                                <form>
                                    <img className="signup_img" src={require('./images/firstphrase.png')}/>
                                    <input type="text" name="firstphrase" onChange={(e) => this.handleChange(e)} value={firstphrase} maxlength="50"></input>
                                        <br/>
                                        <br/>
                                    <img className="signup_img" src={require('./images/secondphrase.png')}/>
                                    <input type="text" name="secondphrase" onChange={(e) => this.handleChange(e)} value={secondphrase} maxlength="50"></input>
                                        <br/>
                                        <br/>
                                    <img className="signup_img" src={require('./images/thirdphrase.png')}/>
                                    <input type="text" name="thirdphrase" onChange={(e) => this.handleChange(e)} value={thirdphrase} maxlength="50"></input>
                                        <br/>
                                        <br/>
                                     <img className="yellowbutton" src={require('./images/submitbutton.png')} onClick={(e) => this.signUp(e)}/> 
                                  
                                     </form>
                
                                </div>
                            </div>
                </Grid.Column>
            </Grid>
        
        </div>
        )
    }
  
    
}


export default LevelTwoSettings