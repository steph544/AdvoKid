import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import Wheel from './prizes/wheel';
import {Card} from 'semantic-ui-react'

class Prizes extends React.Component{
   
    render(){
       
          return(
        <>
            <div className="div2"> <h1>Assign Your Child's Prizes</h1>
            
                <Card>
                <Card.Content>
                <Card.Header>PRIZE ONE</Card.Header>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
            </Card>
    
            </div>

            <div className="div3"> 
               
            </div>
        </>    
    )
    }
  
    
}


export default Prizes