import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import { Button, Form, Segment, Grid } from 'semantic-ui-react'

    
class LevelIntro extends React.Component{
    state = {
    }

    render(){
     
        return(
            <div style={{position: 'absolute', top:'20%', left:'30%'}}>
                <img width="60%" src={require("./images/setlevelsbanner.png")}/>
                <br/>
                <img width="60%" src={require("./images/cycle.png")}/>
            </div>
        )
    }

}


export default LevelIntro