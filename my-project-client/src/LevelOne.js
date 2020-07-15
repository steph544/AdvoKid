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
                    <Grid.Column width={1}>

                    </Grid.Column>
                    <Grid.Column centered width={5}>
                        <Grid.Row>
                            <img style={{width: '140px'}} src={require('./images/star.png')} /> 
                        </Grid.Row> 

                        <Grid.Row>
                            <img src={require('./images/chicken.png')} />
                        </Grid.Row>  

                  
                    </Grid.Column>
                    <Grid.Column centered width={6} textAlign='center'> 
                      
                            <TV className="tv" float='right'/> 
                            
                       
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