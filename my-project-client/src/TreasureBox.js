import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import Wheel from './prizes/wheel';
  


class TreasureBox extends React.Component{
    constructor() {
        super();
        this.places = ['Candy', 'Toy', 'Special Time', 'Soup', 'Japanese food', 'Pastas'];
      }

    componentDidMount(){
        fetch(`http://localhost:3000/incentives`, 
        {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${localStorage.token}`,
            "Content-type": "application/json", 
            "Accept": "application/json"}
        })
             .then(res => res.json())
             .then(incentives => 
                 {debugger 
                    this.setState({
                        incentives: incentives 
                    },
                    console.log(incentives)
                    )
             })
    }

    render(){
        let className="span2"
          return(
        <>
            <div className="div2"> 
                <br/>
                <br/>
                <img src={require("./images/backbtn.png")}/>
            </div>

            <div className="div3"> 
                <div className="App center">
                    <h1>Would you like to spin for a prize?</h1>
                    <br/>
                    <Wheel items={this.places} />
                </div>
            </div>
        </>    
    )
    }
  
    
}


export default TreasureBox