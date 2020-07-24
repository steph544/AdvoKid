import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import Wheel from './prizes/wheel';
  


class TreasureBox extends React.Component{
    constructor() {
        super();
        this.places = ['Candy', 'Toy', 'Special Time', 'Soup', 'Japanese food', 'Pastas'];
      }

    render(){
        let className="span2"
          return(
        <>
            <div className="div2"> <h1>DIV 3</h1>
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