import React, {Component} from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import "./styles.css"
import { render } from 'react-dom';

import ChildSignUp from './ChildSignUp.js'
  


class Parents extends React.Component{
    state={
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

    changeComp = (e) => {
        e.preventDefault();
        this.setState({
            childInfo: null
        })
    }
    changeComp2 = (e) => {
        e.preventDefault();
        this.setState({
            childInfo: "progress"
        })
    }
    
    changeComp3 = (e) => {
        e.preventDefault();
        this.setState({
            childInfo: "levels"
        })
    }

    changeComp4 = (e) => {
        e.preventDefault();
        this.setState({
            childInfo: "prizes"
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    renderSwitch=(param)=>{
        switch(param){
        case null:
          return <ChildSignUp/>
        case 'progress':
            return <h1>progress</h1>
        case 'levels':
            return <h1>levels</h1>
        case 'prizes':
            return <h1>prizes</h1>
        default: 
            return <ChildSignUp/>;
        }
    }

    render(){
        const { username, password, email, first_name, last_name } = this.state
          return(

<div class="parent_page parents-bg-img parents_page">
<div class="div1"> </div>
<div class="div2"> 
<img width="2300px" height="1300px" src="./assets/images/parents_tabs.png" usemap="#image-map"  hidefocus="true"/> 

<map name="image-map">
                        <area target="" alt="Child" title="Child" href="" coords="220,70,622,203" shape="rect" onClick={(e)=> this.changeComp(e)}></area>
                        <area target="" alt="Progress" title="Progress" href="" coords="682,75,1078,189,1151,77,1533,191" shape="0" onClick={(e)=> this.changeComp2(e)}></area>
                        <area target="" alt="Levels" title="Levels" href="" coords="1130,71,1531,195" shape="0" onClick={(e)=> this.changeComp3(e)}></area>
                        <area target="" alt="Prizes" title="Prizes" href="" coords="1601,66,1991,187" shape="0" onClick={(e)=> this.changeComp4(e)}></area>
                    </map>
</div>
<div class="div3"> </div>

{this.renderSwitch(this.state.childInfo)}
</div>         
    )}
  
    
}


export default Parents