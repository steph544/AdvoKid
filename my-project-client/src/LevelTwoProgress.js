import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import AudioCard from "./AudioCard.js"
import {Grid, Container, Card} from 'semantic-ui-react'

class LevelTwoProgress extends React.Component{

    state={
        photos: null,
        currentChildRecordings: null,
        displayedRecordings: null
    }

    deleteRecording=(value)=>{
      this.setState({
        displayedRecordings: this.state.displayedRecordings.filter(recording => recording !== value)
      })
    }

    componentDidMount(){
      if(this.props.currentChild){
         fetch("http://localhost:3000/recordings",
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
            // this.setState({
            //   recordings: data,
            //   displayedRecordings: data.filter(obj=> obj.child_id === this.props.currentChild.id).sort((a, b) => b.datetime - a.datetime).slice(0,8),
            //   currentChildRecordings: data.filter(obj=> obj.child_id === this.props.currentChild.id).sort((a, b) => b.datetime - a.datetime).slice(0,8)
            // })
            console.log(data)
          }
        )
      }
       
      }
    
    render(){
        const { value } = this.state
        if (this.state.displayedRecordings === null){
          return( <div className="child-font">
              <br/>
                <br/> 
                  <br/> 
                     No Progress to Report
            </div>
            )
        } else{
           return(
        <>
          <div className="div3">
            <Card.Group itemsPerRow={4}>
             {this.state.displayedRecordings.map(recording =>
                <AudioCard recording={recording} deleteRecording={this.deleteRecording} currentChild={this.props.currentChild}/>)}
            </Card.Group>
          </div>
               
        </>    
        )
        }
         
    }
  
    
}


export default LevelTwoProgress