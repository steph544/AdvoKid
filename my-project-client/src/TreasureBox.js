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
       selectedPrize: null, 
       newPointValue: 0
   }

   postPrize=()=>{
    if (this.state.selectedPrize !== null){
        fetch("http://localhost:3000/prizes", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                child_id: this.props.location.aboutProps.currentChild.id, 
                name: this.state.selectedPrize
            })
        })
        .then(res => res.json())
        .then(prize => 
            console.log(prize))
        }
       
    }


   selectedPrize=(value)=>{
           this.showPrize(value)
   }

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
                }, 
                ()=>{this.postPrize()}
                ))
            case 1:
                return (this.setState({
                    selectedPrize: this.state.childIncentive.prizetwo
                }, 
                ()=>{this.postPrize()}
                ))
            case 2:
                return (this.setState({
                    selectedPrize: this.state.childIncentive.prizethree
                }, 
                ()=>{this.postPrize()}
                ))
            case 3:
                return (this.setState({
                    selectedPrize: this.state.childIncentive.prizefour
                }, 
                ()=>{this.postPrize()}
                ))
            case 4:
                return (this.setState({
                    selectedPrize: this.state.childIncentive.prizefive
                }, 
                ()=>{this.postPrize()}
                ))
            case 5:
                return (this.setState({
                    selectedPrize: this.state.childIncentive.prizesix
                }, 
                ()=>{this.postPrize()}
                ))
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
                <><div className="treasure-bg-img parent_page">
                    <div className="div20">
                        <h1>
                            You currently do not have enough points to redeem a prize. Please come back when you have more points.
                        </h1>
                    </div>
                        <NavLink to={{
                                pathname: "/navMap", 
                                aboutProps:{
                                    currentChild: this.props.location.aboutProps.currentChild 
                            }
                            }}>   
                            <img src={require("./images/backbtn.png")} alt=""/>
                            </NavLink>
                    </div>
                </>
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
            <br/> 
                <br/>  
                    <br/>  
                        <br/>    
                <CustomChatBot subtractPoints={this.subtractPoints} currentChild={this.props.location.aboutProps.currentChild} childPoints={this.state.newPointValue} showPrize={this.showPrize} selectedPrize={this.state.selectedPrize}/>
                    <p className="a1 child-font2">
                        {/* {this.state.selectedPrize} */}
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