import React, {Component} from 'react'
import { Grid, Image, Card } from 'semantic-ui-react'
import { NavLink} from 'react-router-dom';
import Webcam from "react-webcam";
import "./styles.css"
import { Slide, LightSpeed, Bounce, Rotate } from 'react-awesome-reveal';
import ReactCardFlip from 'react-card-flip';
import HappyCard from "./HappyCard.js"
import WorriedCard from "./WorriedCard.js"
import SurprisedCard from "./SurprisedCard.js"
import SadCard from "./SadCard.js"


class Response extends React.Component{
  constructor() {
    super();
      this.state = {
      isFlipped: false,
      isFlipped2: false,
      isFlipped3: false,
      isFlipped4: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

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

                <Grid.Column centered width={8}>
                  <Grid.Row>
                   </Grid.Row>

                  <Grid.Row>
                    <Grid.Column>
                          <HappyCard/>
                          <WorriedCard/> 
                    </Grid.Column>
                    <Grid.Column>
                      <br/>
                         <br/>  
                            <SurprisedCard/> 
                            <SadCard/> 
                        
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
               
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


export default Response