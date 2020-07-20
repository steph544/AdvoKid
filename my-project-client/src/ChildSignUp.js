import React, {Component, useState} from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import "./styles.css"
import { Dropdown, Grid} from 'semantic-ui-react'
import ChildProfile from './ChildProfile.js'




class ChildSignUp extends React.Component{
    state={
        childProfile: null,
        selectedChild: ""
    }

    selectChild=(value)=>{
        this.setState({
             selectedChild: value
        })
    }

    renderSwitch=(param)=>{
        switch(param){
        // case null:
        //   return <ChildProfile currentUser={this.props.currentUser} selectChild={this.selectChild}/>
        // case 'progress':
        //     return <Progress currentUser={this.state.currentUser}/>
        // case 'levels':
        //     return <Levels currentUser={this.state.currentUser}/>
        // case 'prizes':
        //     return <Prizes currentUser={this.state.currentUser}/>
        default: 
            return <ChildProfile currentUser={this.props.currentUser} selectChild={this.selectChild}/>
        }
    }

    render(){
      
        const { value } = this.state
        const { username, first_name, last_name, image } = this.state
          return(
        <>   
                {this.renderSwitch(this.state.childProfile)}
        </>      
    )}
}

 {/* <img src={require('./images/addchildpicbtn.svg')} width="450px"/> */}
export default withRouter(ChildSignUp)