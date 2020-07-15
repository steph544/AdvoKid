import React, {Component} from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import "./styles.css"
import {ReactComponent as TV} from './images/tv.svg';
//   import { Slide, LightSpeed, Bounce, Rotate } from 'react-awesome-reveal';


function LevelOne(){
  

    return(
         <div className="levelone-bg-img">
             <Grid>
                <Grid.Row>
                <Grid.Column width={8}>
                   Column 1 
                </Grid.Column>
                <Grid.Column width={8}> 
                <div class="center">
                    <TV className="tv" float='right'/> 
                    Column 2
                </div>
                    
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Grid.Column width={8}>
                    Column 3
                </Grid.Column>
                <Grid.Column width={8}>
                    Column 4
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>  
    )
    
}


export default LevelOne