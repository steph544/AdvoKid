import React, {Component} from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import "./styles.css"
import LevelOneMainContainer from "./LevelOneMainContainer.js"
import WebCam from "./WebCam.js"
import { Slide, LightSpeed, Bounce, Rotate } from 'react-awesome-reveal';


class LevelOne extends React.Component{

  
render(){
    return(  
        <div className="levelone-bg-img">
            <br/>
                <br/>
                    <br/>
                        <br/>
                            <br/>
                                <br/>
                                    <br/>
                                        <br/>
            <LevelOneMainContainer/>   
      </div>
    )} 
}

export default LevelOne