import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import "./styles.css"

class LevelOneProgress extends React.Component{

    state={
        photos: null 
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
            console.log(data)
            this.setState({
              photos: data
            })
            
          }
        )
      }
    
    render(){
        const { value } = this.state
          return(
        <>
           
        </>    
    )
    }
  
    
}


export default LevelOneProgress