import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import PhotoCard from "./PhotoCard.js"
import {Grid, Container, Card} from 'semantic-ui-react'
class LevelOneProgress extends React.Component{

    state={
        photos: null,
        currentChildPhotos: null
    }

    componentDidMount(){
        fetch("http://localhost:3000/images",
        {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.token}`,
            "Content-type": "application/json", 
            "Accept": "application/json"
          } 
        })
        .then(res => res.json())
        .then(data => 
          {
            this.setState({
              photos: data,
              currentChildPhotos: data.filter(obj=> obj.child_id === this.props.currentChild.id).slice(0,8)
            })
            
          }
        )
      }
    
    render(){
        const { value } = this.state
        if (this.state.currentChildPhotos === null){
          return("")
        } else{
           return(
        <>
          <div className="div3">
            <br/>
            <br/> 
            <Card.Group itemsPerRow={4}>
             {this.state.currentChildPhotos.map(photo =>
                <PhotoCard photo={photo}/>)}
            </Card.Group>
          </div>
               
        </>    
        )
        }
         
    }
  
    
}


export default LevelOneProgress