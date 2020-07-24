import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import Wheel from './prizes/wheel';
  


class TreasureBox extends React.Component{
   state={
       totalPoints: 0,
       selectedPrize: ""
   }

   selectedPrize=(value)=>{
        switch (value){
            case 0:
                return (this.setState({
                    selectedPrize: this.state.childIncentive.prizeone
                }))
            case 1:
                return (this.setState({
                    selectedPrize: this.state.childIncentive.prizetwo
                }))
            case 2:
                return (this.setState({
                    selectedPrize: this.state.childIncentive.prizethree
                }))
            case 3:
                return (this.setState({
                    selectedPrize: this.state.childIncentive.prizefour
                }))
            case 4:
                return (this.setState({
                    selectedPrize: this.state.childIncentive.prizefive
                }))
            case 5:
                return (this.setState({
                    selectedPrize: this.state.childIncentive.prizesix
                }))
        }
   }

    spinWheel=()=>{
        if(this.state.childIncentive !== undefined){
               return (
              <Wheel selectedPrize={this.selectedPrize} items={[`${this.state.childIncentive.prizeone}`, `${this.state.childIncentive.prizetwo}`, `${this.state.childIncentive.prizethree}`, `${this.state.childIncentive.prizefour}`, `${this.state.childIncentive.prizefive}`, `${this.state.childIncentive.prizesix}`]} />
        )
        }
     
      
    }

    getPoints=()=>{
        fetch(`http://localhost:3000/points`, 
             {
                 method: "GET",
                 headers: {
                 "Authorization": `Bearer ${localStorage.token}`,
                 "Content-type": "application/json", 
                 "Accept": "application/json"}
             })
                  .then(res => res.json())
                  .then(points => 
                      {
                         this.setState({
                             
                             totalPoints: points.reduce((accum,item) => accum + item.total, 0),
                             childPoints: points.filter(child_id => child_id !== this.props.location.aboutProps.currentChild)
                         },
                         console.log(points)
                         )
                  })
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
                    this.getPoints()
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
                <NavLink to={{
                    pathname: "/navMap", 
                    aboutProps:{
                        currentChild: this.props.location.aboutProps.currentChild 
                    }
                }}>   
                <img src={require("./images/backbtn.png")}/>
                </NavLink>
            </div>

            <div className="div3"> 
                <div className="App center child-font">
                    <h1>Your total Points: {this.state.totalPoints}</h1>
                        <br/> 
                    <h1>Would you like to spin for a prize?</h1>
                        <br/>
                            {this.spinWheel()}
                            <br/> 
                            {this.state.selectedPrize}
                </div>
            </div>
        </>    
    )
    }
  
    
}


export default TreasureBox