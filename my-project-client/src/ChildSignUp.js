import React, {Component} from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import "./styles.css"

  


class ChildSignUp extends React.Component{
    state={
        childPicture: "https://via.placeholder.com/150"
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

     // upload=()=>{
    //     fetch("http://localhost:3000/children/",
    //     {
    //     method: "POST",
    //     headers: {
    //         "Content-Type" : "application/json"
    //     },
    //     body: JSON.stringify({
    //         screen_shot: imageSrc, 
    //         username: localStorage.user
    //     })
    //     })
    //     .then(res => res.json())
    //     .then(image=> 
    //       console.log(image)
    //     ) 
    // }
    
    render(){
        const { username, password, email, first_name, last_name } = this.state
          return(
            <>
               
            <div class="div24"> 
            <img src={this.state.childPicture} width="450px"/>            
                     <img onClick={this.upload} src={require('./images/addchildpicbtn.svg')} width="450px"/>
            </div>

            <div class="div25"> 
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

            <div className="div26">
                <img width="100%" height="100%" src={require("./images/dog.png")}/>
            </div>
               </>    
    
             
    )
    }
  
    
}


export default ChildSignUp