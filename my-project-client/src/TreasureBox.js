import React from 'react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import Wheel from './prizes/wheel';
import CustomChatBot from "./ChatBot.js"
import CountUp from 'react-countup';



class TreasureBox extends React.Component{
   state={
       totalPoints: 0,
       childPoints: 0, 
       selectedPrize: "", 
       newPointValue: 0
   }
   selectedPrize=(value)=>{(
       setTimeout(this.showPrize(value), 10000)
   )}

   subtractPoints=()=>{
       if (this.state.newPointValue > 5){
            const childPoints=this.state.newPointValue
            const newPointValue= this.state.childPoints - 5
       
            this.setState({
                    newPointValue: newPointValue
            })
            console.log(newPointValue)
       }
   }

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
            default: 
                return ""
        }
   }

    spinWheel=()=>{
        if(this.state.childIncentive !== undefined){
               return (
              <Wheel selectedPrize={this.selectedPrize} items={[`${this.state.childIncentive.prizeone}`, `${this.state.childIncentive.prizetwo}`, `${this.state.childIncentive.prizethree}`, `${this.state.childIncentive.prizefour}`, `${this.state.childIncentive.prizefive}`, `${this.state.childIncentive.prizesix}`]} currentChild={this.props.location.aboutProps.currentChild} getItem={this.getItem}/>
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
                             childPoints: points.filter(point => point.child_id === this.props.location.aboutProps.currentChild.id).reduce((accum,item) => accum + item.total, 0),
                             newPointValue: points.filter(point => point.child_id === this.props.location.aboutProps.currentChild.id).reduce((accum,item) => accum + item.total, 0)
                         },
                         console.log(points)
                         )
                  })
    }

    getItem=(value)=>{
       localStorage.getItem= value
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
                        childIncentive: incentives.filter(incentive => incentive.child_id === this.props.location.aboutProps.currentChild.id).pop() 
                    },
                    this.getPoints()
                    )
             })
             
    }

    render(){
        if (this.state.childPoints === undefined || this.state.childPoints < 5){
            return(
                <div className="treasure-bg-img parent_page">
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
                <img src={require("./images/backbtn.png")} alt=""/>
                </NavLink>
            </div>
            
            <div className="div20">
                    <img alt="" width="100%" src={require("./images/wheelbanner.png")}/>
            </div>

            <div className="div17"> 
                <div className="center child-font">
                        <br/>
                        <br/> 
                            {this.spinWheel()}
                            <br/> 
                          
                </div>
            </div>
           

            <div className="div18">          
                <CustomChatBot subtractPoints={this.subtractPoints} currentChild={this.props.location.aboutProps.currentChild} childPoints={this.state.newPointValue}/>
                    <p className="a1 child-font2">
                        {this.state.selectedPrize}
                    </p>
            </div>

            <div className="div21 star-container child-font5">
                <br/> 
                <br/>
                    <img height="80%" style={{display: "in-line"}}src={require("./images/star.png")}/> 
                    <br/>Points

                        <CountUp duration="2" start={this.state.childPoints} end={this.state.newPointValue} delay={0}>
                            {({ countUpRef }) => (
                            <div className="counter">
                                <span className="child-font5" ref={countUpRef} />
                            </div>
                            )}
                        </CountUp>
                </div>
         </div>
    )}
    }
  
    
}


export default TreasureBox