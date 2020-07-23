import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import { Button, Form, Segment, Grid } from 'semantic-ui-react'

    
class LevelTwoSettings extends React.Component{
    state = {
        currentUser: JSON.parse(localStorage.getItem("currentUser")).id,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if (localStorage.currentChild !== "null"){
            this.state.currentChild = JSON.parse(localStorage.getItem("currentChild")).id
        } 
    }

    handleSubmit = () => this.setState({ first_phrase: '', second_phrase: '', third_phrase: ''})
        
    

    submitPhrase = (e) => {
        e.preventDefault()
       if(this.state.currentChild !== null){
            fetch("http://localhost:3000/phrases", {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify({
                        
                            phrase_one: this.state.firstphrase,
                            phrase_two: this.state.secondphrase,   
                            phrase_three: this.state.thirdphrase, 
                            user_id: this.state.currentUser,
                            child_id: this.state.currentChild
                        })
                    })
                    .then(res => res.json())
                    .then(phrase => 
                        {
                            console.log(phrase)
                    }
                    )}  
        
    }

    render(){
     
        const { firstphrase, secondphrase, thirdphrase } = this.state
    
        return(
        
            <div>
                
            <Grid centered columns={2}>
                <Grid.Column style={{position: 'absolute', top:'10%', left: '35%'}}>
                    <div>
                        <div>
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/>
                                <form>
                                    <img className="signup_img" src={require('./images/firstphrase.png')}/>
                                    <br/>
                                    <input className="rounded-input" type="text" name="firstphrase" onChange={(e) => this.handleChange(e)} value={firstphrase} maxlength="50"></input>
                                        <br/>
                                        <br/>
                                    <img className="signup_img" src={require('./images/secondphrase.png')}/>
                                    <br/>
                                    <input className="rounded-input" type="text" name="secondphrase" onChange={(e) => this.handleChange(e)} value={secondphrase} maxlength="50"></input>
                                        <br/>
                                        <br/>
                                    <img className="signup_img" src={require('./images/thirdphrase.png')}/>
                                    <br/>
                                    <input className="rounded-input" type="text" name="thirdphrase" onChange={(e) => this.handleChange(e)} value={thirdphrase} maxlength="50"></input>
                                        <br/>
                                        <br/>
                                     <img src={require('./images/submitbutton.png')} onClick={(e) => this.submitPhrase(e)}/> 
                                  
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