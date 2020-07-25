import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import { Button, Form, Segment, Grid } from 'semantic-ui-react'

    
class LevelIntro extends React.Component{
    state = {
    }

    render(){
     
        return(
            <div className="div14">
                <img width="80%" src={require("./images/setlevelsbanner.png")}/>
                <br/>
                <img width="90%" src={require("./images/cycle.png")}/>
            </div>
        )
    }

}


export default LevelIntro