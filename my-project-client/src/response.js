import React, {Component} from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom';
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
                  <Grid.Column>
                    <img src={require("./images/dog_response.svg")}/>
                  </Grid.Column>
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

                <Grid.Column centered width={7}>
                  <Grid.Row stretched>
                   </Grid.Row>

                  <Grid.Row stretched>
                
                    <Grid.Column>
                        <img src={require("./images/happy.png")}/> 
                        <br/>
                        <h1>Happy</h1>
                        <br/> 
                        <img src={require("./images/worried.png")}/> 
                        <br/>
                        <h1>Upset</h1>
                        <br/>
                    </Grid.Column>
                    <Grid.Column>
                      <img src={require("./images/surprised.png")}/> 
                      <img src={require("./images/smirk.png")}/> 
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row stretched>
               
                    <Grid.Column>
                 
                    </Grid.Column>
                    <Grid.Column>
                    
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


export default withRouter(Response)