import React, {Component} from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import {ReactComponent as TV} from './images/tv.svg';
import {ReactComponent as Chicken} from './images/chicken.svg';
import Webcam from "react-webcam";




class LevelOne extends React.Component{

changePage=()=>{
    this.props.changePage("webcam")
}    

// postProgress=()=>{
//     fetch("http://localhost:3000/levels",
//     {
//     method: "POST",
//     headers: {
//         "Content-Type" : "application/json"
//     },
//     body: JSON.stringify({
//         name: "LevelOne", 
//         child_id: this.props.location.aboutProps.currentChild.id 
//     })
//     })
//     .then(res => res.json())
//     .then(level=> 
//         console.log(level)
//     ) 
// }

render(){



    return(
      
         <div className="levelone-bg-img">
            <Grid>
                <Grid.Row>
               
                    <Grid.Column width={1}>
                         {/* <img style={{width: '140px'}} src={require('./images/star.png')} />  */}
                    
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
                                 <Chicken/>       
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
             
	
        </div>

        
    )
}
    
    
}


export default LevelOne