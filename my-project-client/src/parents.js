import React, {Component} from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import "./styles.css"
import { render } from 'react-dom';

import ChildSignUp from './ChildSignUp.js'
  


class Parents extends React.Component{
    state={
        childPicture: "https://via.placeholder.com/150",
        childInfo: null 
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
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    renderSwitch=(param)=>{
        switch(param){
            default: 
            return <ChildSignUp/>;
        }
    }

    render(){
        const { username, password, email, first_name, last_name } = this.state
          return(
         <div className="parents-bg-img parents_page">
             <br/>
             <br/> 
             {/* <div className="parents_tab_container"> */}
                 <img className="tabs" width="2300px" height="1300px" src="./assets/images/parents_tabs.png" /> 
              
                    <div className="profile_pic">
                        <img src={this.state.childPicture} width="350px"/>            
                        <img onClick={this.upload} src={require('./images/addchildpicbtn.svg')} width="350px"/>
                    </div> 

                    <div className="child_signup">
                    <br/>
                                {this.renderSwitch(this.state.childInfo)}
                        </div>
            </div> 
                 
                   
    
             
    )
    }
  
    
}


export default Parents