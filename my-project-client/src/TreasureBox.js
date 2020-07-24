import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import Wheel from './prizes/wheel';
  


class TreasureBox extends React.Component{
   state={}

    spinWheel=()=>{
        if(this.state.childIncentive !== undefined){
               return (
              <Wheel items={[`${this.state.childIncentive.prizeone}`, `${this.state.childIncentive.prizetwo}`, `${this.state.childIncentive.prizethree}`, `${this.state.childIncentive.prizefour}`, `${this.state.childIncentive.prizefive}`, `${this.state.childIncentive.prizesix}`]} />
        )
        }
     
      
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
                 {
                    this.setState({
                        incentives: incentives,
                        childIncentive: incentives.filter(child_id => child_id !== this.props.location.aboutProps.currentChild).pop() 
                    },
                    // this.setWheel()
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
                <div className="App center child-font">
                    <h1>Would you like to spin for a prize?</h1>
                    <br/>
                        {this.spinWheel()}
                </div>
            </div>
        </>    
    )
    }
  
    
}


export default TreasureBox