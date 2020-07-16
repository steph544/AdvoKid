import React, {Component} from 'react'

  import { NavLink, withRouter } from 'react-router-dom';
  import {connect} from 'react-redux'
  import "./styles.css"
import { render } from 'react-dom';
//   import {ReactComponent as NavMapImage} from './images/navMapImage.svg';
//   import { Slide, LightSpeed, Bounce, Rotate } from 'react-awesome-reveal';


class Parents extends React.Component{
    state={
        selectedTab: require("./images/parents_tab1.png")
    }
  

    render(){
          return(
         <div className="parents-bg-img">
             <div className="parent">
                 <h3 className="tab-1">CHILD</h3>
                 <img className="character" style={{width: '1800px', height: '1000px'}} src={this.state.selectedTab}  /> 
             </div>
             
        </div>
    )
    }
  
    
}


export default Parents