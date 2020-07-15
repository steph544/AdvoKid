import React, {Component} from 'react'

  import { NavLink, withRouter } from 'react-router-dom';
  import {connect} from 'react-redux'
  import "./styles.css"
  import {ReactComponent as WebCam} from './images/webCam.svg';


function webCam(){

    return(
      
        <div>
             <WebCam className="center"/>
        </div>
    )
    
}


export default WebCam