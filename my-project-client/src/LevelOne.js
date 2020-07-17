import React, {Component} from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import "./styles.css"
import LevelOneMainContainer from "./LevelOneMainContainer.js"
import WebCam from "./WebCam.js"
import { Slide, LightSpeed, Bounce, Rotate } from 'react-awesome-reveal';


class LevelOne extends React.Component{

    // state={
    //     selection: "video"
    // }
    // changePage=(value)=>{
    //     this.setState({
    //            selection: value 
    //     })
    // }

    // renderSwitch(param) {
    //     switch(param) {
    //       case 'video':
    //         return  <LevelOneMainContainer changePage={this.changePage}/>
    //       case 'webcam':
    //         return <Slide><WebCam changePage={this.changePage}/></Slide>
    //     //   case 'matches': 
    //     //     return <MatchTileList users={this.state.matchedUsers} />
    //     //   case 'searchTerms': 
    //     //     return <SearchTermList terms={this.state.filteredTerms} submitTerms={this.submitTerms} filter={this.filter} selectedLink={this.props.selectedLink}/>
    //       default: 
    //         return null; 
    //     }
    // }
  
render(){
    return(  
        <div className="levelone-bg-img">
            <br/>
            <br/>
            <br/>
      
            <LevelOneMainContainer/>   
      </div>
    )} 
}

export default LevelOne