import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import Wheel from './prizes/wheel';
import CustomChatBot from "./ChatBot.js"



class TreasureBox extends React.Component{
   state={
       totalPoints: 0,
       selectedPrize: ""
   }
   selectedPrize=(value)=>{(
       setTimeout(this.showPrize(value), 10000)
   )}

   showPrize=(value)=>{
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
                             childPoints: points.filter(point => point.child_id === this.props.location.aboutProps.currentChild.id).reduce((accum,item) => accum + item.total, 0)
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
                     debugger 
                    this.setState({
                        incentives: incentives,
                        childIncentive: incentives.filter(incentive => incentive.child_id === this.props.location.aboutProps.currentChild.id).pop() 
                    },
                    this.getPoints()
                    )
             })
             
    }

    render(){
        if (this.state.childPoints === undefined || this.state.childPoints < 5){
            return(
                <div>
                    You currently do not have enough points to redeem a prize. Please come back when you have more points.
                </div>
            )
        } else {
          return(
        <div className="treasure-bg-img parent_page">

            <div className="div16"> 
          
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

            <div className="div17"> 
                <div className="center child-font">
                    <h1>Your total Points: {this.state.childPoints}</h1>
                        
                        <br/>
                            {this.spinWheel()}
                            <br/> 
                          
                </div>
            </div>
           

            <div className="div18">          
                <CustomChatBot currentChild={this.props.location.aboutProps.currentChild} childPoints={this.state.childPoints}/>
                    <p className="a1 child-font2">
                        {this.state.selectedPrize}
                    </p>
            </div>
         </div>
    )}
    }
  
    
}


export default TreasureBox