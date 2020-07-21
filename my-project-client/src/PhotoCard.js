import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import {Card, Image, Button, Rating} from 'semantic-ui-react'
import "./styles.css"

class PhotoCard extends React.Component{


        


    render(){
          return(
        <> 
            <Card color='orange'>
               <Image src={this.props.photo.screen_shot}/>
               <Card.Content extra>
                   <Rating icon='star' defaultRating={3} maxRating={4} /> 
                   <div className='ui two buttons'>
                     
                     <Button basic color='green'>
                        Reward
                    </Button>
                    <Button basic color='red'>
                        Delete
                    </Button>
                    </div>
                   
                </Card.Content>
           </Card>
        </>    
    )
    }
  
    
}


export default PhotoCard