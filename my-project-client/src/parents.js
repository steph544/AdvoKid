import React, {Component} from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import "./styles.css"
import { render } from 'react-dom';
import Progress from "./Progress.js"
import ChildSignUp from './ChildSignUp.js'
import Levels from "./Levels.js"
import Prizes from "./Prizes.js"


class Parents extends React.Component{
    state={
        childInfo: null
    }

   

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
            return <Progress/>
        case 'levels':
            return <Levels/>
        case 'prizes':
            return <Prizes/>
        default: 
            return <ChildSignUp/>;
        }
    }

    render(){
          return(

<div className="parent_page parents-bg-img parents_page">
<div className="div20"> 
<img width="100%" height="100%" src="./assets/images/parents_tabs.png" usemap="#image-map" hidefocus="true"/> 

<map name="image-map">
                        <area target="" alt="Child" title="Child" href="" coords="288,36,710,213" shape="rect" onClick={(e)=> this.changeComp(e)}></area>
                        <area target="" alt="Progress" title="Progress" href="" coords="755,58,1190,208,952,148,1479,112" shape="rect" onClick={(e)=> this.changeComp2(e)}></area>
                        <area target="" alt="Levels" title="Levels" href="" coords="1219,51,1618,204,1394,94,1836,123" shape="rect" onClick={(e)=> this.changeComp3(e)}></area>
                        <area target="" alt="Prizes" title="Prizes" href="" coords="1660,50,2078,202,452,77,1878,126" shape="rect" onClick={(e)=> this.changeComp4(e)}></area>
                    </map>

</div>



{this.renderSwitch(this.state.childInfo)}
</div>         
    )}
  
    
}


export default Parents