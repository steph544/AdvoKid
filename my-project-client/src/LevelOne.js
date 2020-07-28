import React from 'react'
import { Grid } from 'semantic-ui-react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import {ReactComponent as TV} from './images/tv.svg';
// import {ReactComponent as Chicken} from './images/chicken.svg';
 
class LevelOne extends React.Component{

changePage=()=>{
    this.props.changePage("webcam")
}    

render(){

    return(
      
         <div className="levelone-bg-img level-one-page">
             <div className="div25">
                <TV className="tv" float='right'/>
             </div>

             <div className="div26">
                 <img width="100%" src={require("./images/chicken2.png")}/>
                 <br/> 
                 <NavLink to={{
                                 pathname: "/navMap", 
                                aboutProps:{
                                    currentChild: this.props.location.aboutProps.currentChild 
                                }
                             }}>  
                                <img src={require("./images/backbtn.png")}></img> 
                            </NavLink> 
                             <NavLink to={{
                                 pathname: "/response", 
                                aboutProps:{
                                    currentChild: this.props.location.aboutProps.currentChild
                                }
                             }}> 
                                <img src={require("./images/nextbtn.png")}></img> 
                            </NavLink> 
             </div>

            {/* <Grid>
                <Grid.Row>
               
                    <Grid.Column width={1}>
                        
                    
                    </Grid.Column>
                    <Grid.Column centered width={7}>
                  
                        <Grid.Row> 
                            <TV className="tv" float='right'/>
                        </Grid.Row> 

                        <Grid.Row> 
                            <Grid.Column>
                            </Grid.Column>

                            <Grid.Column>
                                
                            </Grid.Column>
                           
                               
                        </Grid.Row>  
                    </Grid.Column>

                    <Grid.Column centered width={6} textAlign='center'> 
                             <Grid.Row>
                                 
                                 <img height='75%' src={require("./images/chicken2.png")}/>
                             </Grid.Row>

                             <Grid.Row>
                             <NavLink to={{
                                 pathname: "/navMap", 
                                aboutProps:{
                                    currentChild: this.props.location.aboutProps.currentChild 
                                }
                             }}>  
                                <img src={require("./images/backbtn.png")}></img> 
                            </NavLink> 
                             <NavLink to={{
                                 pathname: "/response", 
                                aboutProps:{
                                    currentChild: this.props.location.aboutProps.currentChild
                                }
                             }}> 
                                <img src={require("./images/nextbtn.png")}></img> 
                            </NavLink> 
                                
                              
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
              */}
	
        </div>

        
    )
}
    
    
}


export default LevelOne