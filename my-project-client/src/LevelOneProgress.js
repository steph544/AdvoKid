import React from 'react'
import "./styles.css"
import PhotoCard from "./PhotoCard.js"
import {Card} from 'semantic-ui-react'
class LevelOneProgress extends React.Component{

    state={
        photos: null,
        currentChildPhotos: null,
        displayedPhotos: null
    }

    deletePhoto=(value)=>{
      this.setState({
        displayedPhotos: this.state.displayedPhotos.filter(photo => photo !== value)
      })
    }

    componentDidMount(){
      if(this.props.currentChild){
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
              displayedPhotos: data.filter(obj=> obj.child_id === this.props.currentChild.id).sort((a, b) => b.datetime - a.datetime).slice(0,8),
              currentChildPhotos: data.filter(obj=> obj.child_id === this.props.currentChild.id).sort((a, b) => b.datetime - a.datetime).slice(0,8)
            })
            
          }
        )
      }
       
      }
    
    render(){
        const { value } = this.state
        if (this.state.displayedPhotos === null){
          return( 
          <div>
            <br/> 
            <br/>
             <h1 className="child-font"> No Progress to Report </h1>
          </div>
            )
        } else{
           return(
        <>
          <div className="div3">
            <Card.Group itemsPerRow={4}>
             {this.state.displayedPhotos.map(photo =>
                <PhotoCard key={photo.id} photo={photo} deletePhoto={this.deletePhoto} currentChild={this.props.currentChild}/>)}
            </Card.Group>
          </div>
               
        </>    
        )
        }
         
    }
  
    
}


export default LevelOneProgress