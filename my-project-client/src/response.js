import React, {Component} from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import Webcam from "react-webcam";
import "./styles.css"
import { Slide, LightSpeed, Bounce, Rotate } from 'react-awesome-reveal';



class Response extends React.Component{
 
 
  render(){
  
    return(
      <div className="levelone-bg-img">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
         
      <Grid>
          <Grid.Row>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column centered width={7}>
                <img src={require("./images/dog_response.svg")}/>
                  <Grid.Row> 
                  </Grid.Row> 

                  <Grid.Row> 
                      <Grid.Column>
                      </Grid.Column>

                      <Grid.Column>
                        <NavLink
                            to="/levelone"
                            exact
                            
                            activeStyle={{
                                background: 'darkblue'
                            }}
                            > 
                            <img src={require("./images/backbtn.png")}></img> 
                        </NavLink> 
                        <NavLink
                            to="/webcam"
                            exact
                            
                            activeStyle={{
                                background: 'darkblue'
                            }}
                            > 
                            <img src={require("./images/nextbtn.png")}></img> 
                        </NavLink> 
                      </Grid.Column>

                    </Grid.Row>  
                </Grid.Column>

            </Grid.Row>
            
            <Grid.Row>
                <Grid.Column width={8}>
                </Grid.Column>

                <Grid.Column width={8}>
                </Grid.Column>
            </Grid.Row>
      </Grid>
       

  </div>
    )}
  
    
}


export default Response