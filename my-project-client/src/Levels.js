import React, {Component} from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import "./styles.css"
import {ReactComponent as LevelsDash} from './images/levels_dash.svg';
  


class Levels extends React.Component{


    render(){
          return(
        <>
            <div class="div7"> 
                <LevelsDash style={{width: "100%", height: "100%"}}/>
            </div>
        </>    
    )
    }
  
    
}


export default withRouter(Levels)