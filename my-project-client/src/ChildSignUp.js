import React, {Component} from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import "./styles.css"
import { render } from 'react-dom';
  


class ChildSignUp extends React.Component{
    state={
        child_picture: "https://via.placeholder.com/150"
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const { username, password, email, first_name, last_name } = this.state
          return(
            <>
               
            <div class="div4"> 
            <img src={this.state.childPicture} width="350px"/>            
                     <img onClick={this.upload} src={require('./images/addchildpicbtn.svg')} width="350px"/>
            </div>

            <div class="div5"> 
            <form>
                <br/>
                <br/>

                <img className="signup_img" src={require('./images/first_name.png')}/>
                <   br/> 
                <input type="text" name="first_name" onChange={(e) => this.handleChange(e)} value={first_name}></input>
                    <br/>
                    <br/>
                <img className="signup_img" src={require('./images/last_name.png')}/>
                    <br/>
                <input type="text" name="last_name" onChange={(e) => this.handleChange(e)} value={last_name}></input>
                    <br/>
                    <br/>
                <img className="signup_img" src={require('./images/age.png')}/>
                    <br/>
                <input type="text" name="username" onChange={(e) => this.handleChange(e)} value={username}></input>
                    <br/>
                    <br/>
                <img className="yellowbutton" src={require('./images/submitbutton.png')} onClick={(e) => this.signUp(e)}/> 
        
            </form>
            </div>
               </>    
    
             
    )
    }
  
    
}


export default ChildSignUp