import React from 'react'
import { Grid, Card } from 'semantic-ui-react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import HappyCard from "./HappyCard.js"
import WorriedCard from "./WorriedCard.js"
import SurprisedCard from "./SurprisedCard.js"
import SadCard from "./SadCard.js"


class Response extends React.Component{
  constructor() {
    super();
      this.state = {
      message: "",
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
  
  setMessage=(value)=>{
    this.setState({
      message: value 
    })
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
                               to={{
                                pathname: "/levelone", 
                               aboutProps:{
                                   currentChild: this.props.location.aboutProps.currentChild 
                               }
                            }}>  
                                <img src={require("./images/backbtn.png")}></img> 
                            </NavLink> 
                            <NavLink
                                to={{
                                  pathname: "/webCam", 
                                 aboutProps:{
                                     currentChild: this.props.location.aboutProps.currentChild 
                                 }
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
                      <Card.Group itemsPerRow={2}>
                          <HappyCard setMessage={this.setMessage}/>
                          <WorriedCard/> 
                        <Card>

                        </Card>
                        <Card>
                          
                        </Card>
                          <SurprisedCard/>
                          <SadCard/>
                   
                      </Card.Group>
                          
                          
                    </Grid.Column>
                    <Grid.Column>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                    <h1 className="child-font2 a4">{this.state.message}</h1>
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