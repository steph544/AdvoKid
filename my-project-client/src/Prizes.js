import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import Wheel from './prizes/wheel';
import {Card, Input, Button} from 'semantic-ui-react'

class Prizes extends React.Component{

    state={
        incentives: [],
        submitted: false,
        
    }
   
    handleChange=(e)=>{   
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit=()=>{
    if(this.props.currentChild !== null){
             fetch(`http://localhost:3000/incentives`, {
                 method: "POST",
                 headers: {
                     "Content-type": "application/json"
                 },
                 body: JSON.stringify({
                     user_id: this.props.currentUser.id, 
                     points_required: 0, 
                     prizeone: this.state.prizeone,
                     prizetwo: this.state.prizetwo,
                     prizethree: this.state.prizethree,
                     prizefour: this.state.prizefour, 
                     prizefive: this.state.prizefive, 
                     prizesix: this.state.prizesix,
                     child_id: this.props.currentChild.id
                 })
             })
             .then(res => res.json())
             .then(incentive => 
                 {
                     console.log(incentive)
                     localStorage.setIncentive=incentive 
                    this.setState({
                        submitted: true 
                    })
             })
        }

    }

    render(){
        if (this.state.submitted === false){

            const { prizeone, prizetwo, prizethree, prizefour, prizefive, prizesix } = this.state
          return(
        <>
            <div className="div14"> 
                <img src={require("./images/prizecenter.png")}/>
            </div>

            <div className="div15 center"> 
            
                <Card.Group className="div15" itemsPerRow={3}>
                <Card color="red">
                    <Card.Content className="center">
                    
                        <Card.Header>
                            PRIZE ONE
                        </Card.Header>

                        <Card.Description>
                        <Input size='large' onChange={(e) => this.handleChange(e)} transparent placeholder='Type Prize One Here' maxLength="15" name="prizeone" value={prizeone}  />
                        
                        </Card.Description>
                        <br/>
                        
                    </Card.Content>
                </Card>

                <Card color="red">
                    <Card.Content className="center">
                    
                        <Card.Header>
                            PRIZE TWO
                        </Card.Header>

                        <Card.Description>
                        <Input size='large' onChange={(e) => this.handleChange(e)} transparent placeholder='Type Prize Two Here' maxLength="15" name="prizetwo" value={prizetwo}  />
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card color="red">
                    <Card.Content className="center">
                    
                        <Card.Header>
                            PRIZE THREE
                        </Card.Header>

                        <Card.Description>
                        <Input size='large' onChange={(e) => this.handleChange(e)} transparent placeholder='Type Prize Three Here' maxLength="15" name="prizethree" value={prizethree} />
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card color="red">
                    <Card.Content className="center">
                    
                        <Card.Header>
                            PRIZE FOUR
                        </Card.Header>

                        <Card.Description>
                        <Input size='large' onChange={(e) => this.handleChange(e)} transparent placeholder='Type Prize Four Here' maxLength="15" name="prizefour" value={prizefour} />
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card color="red">
                    <Card.Content className="center">
                    
                        <Card.Header>
                            PRIZE FIVE
                        </Card.Header>

                        <Card.Description>
                        <Input size='large' onChange={(e) => this.handleChange(e)} transparent placeholder='Type Prize Five Here' maxLength="15" name="prizefive" value={prizefive} />
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card color="red">
                    <Card.Content className="center">
                    
                        <Card.Header>
                            PRIZE SIX
                        </Card.Header>

                        <Card.Description>
                        <Input size='large' onChange={(e) => this.handleChange(e)} transparent placeholder='Type Prize Six Here' maxLength="15" name="prizesix" value={prizesix}/>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
            <br/>
            <br/> 
            <br/>
            <Button color="red" content="Submit" onClick={this.submit}></Button>

         
       

            </div>

        
        </>    
    )
        } else {
            return (

            <>
                <div className="div14"> 
                    <img src={require("./images/prizecenter.png")}/>
                </div>

                <div className="div15 center"> 
                    <br/>
                        <br/> 
                            <br/> 
                                <p className="a1 funfont">
                                    Prizes have been set!
                                </p>
                </div>
            </>
            )
          
        }
        
    }
  
    
}


export default Prizes