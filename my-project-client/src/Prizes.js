import React from 'react'
import "./styles.css"
import {Card, Input, Button, Image} from 'semantic-ui-react'

class Prizes extends React.Component{

    state={
        incentives: [],
        submitted: false,
        message: "" 
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
        } else {
            this.setState({
                message: "Please Choose Child Before Submitting"
            })
        }

    } 

    render(){
        if (this.state.submitted === false){

            const { prizeone, prizetwo, prizethree, prizefour, prizefive, prizesix } = this.state
          return(
        <>
            <div className="div14 center"> 
                <img width='90%' src={require("./images/prizecenter.png")} alt="" />
            {/* </div>

            <div className="div15 center">  */}
            
                <Card.Group itemsPerRow={3}>
                <Card id="prizecard">
                    <Card.Content className="center">
                    
                        <Card.Header>
                            <Image src={require ("./images/prizeone.png")}/>
                        </Card.Header>

                        <Card.Description>
                        <Input size='huge' onChange={(e) => this.handleChange(e)} transparent placeholder='Type Prize One Here' maxLength="15" name="prizeone" value={prizeone}  />
                        
                        </Card.Description>
                        <br/>
                        
                    </Card.Content>
                </Card>

                <Card id="prizecard">
                    <Card.Content className="center">
                    
                        <Card.Header>
                            <Image src={require ("./images/prizetwo.png")}/>
                        </Card.Header>

                        <Card.Description>
                        <Input size='huge' onChange={(e) => this.handleChange(e)} transparent placeholder='Type Prize Two Here' maxLength="15" name="prizetwo" value={prizetwo}  />
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card id="prizecard">
                    <Card.Content className="center">
                    
                        <Card.Header>
                            <Image src={require ("./images/prizethree.png")}/>
                        </Card.Header>

                        <Card.Description>
                        <Input size='huge' onChange={(e) => this.handleChange(e)} transparent placeholder='Type Prize Three Here' maxLength="15" name="prizethree" value={prizethree} />
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card id="prizecard">
                    <Card.Content className="center">
                    
                        <Card.Header>
                            <Image src={require ("./images/prizefour.png")}/>
                        </Card.Header>

                        <Card.Description>
                        <Input size='huge' onChange={(e) => this.handleChange(e)} transparent placeholder='Type Prize Four Here' maxLength="15" name="prizefour" value={prizefour} />
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card id="prizecard">
                    <Card.Content className="center">
                    
                        <Card.Header>
                            <Image src={require ("./images/prizefive.png")}/>
                        </Card.Header>

                        <Card.Description>
                        <Input size='huge' onChange={(e) => this.handleChange(e)} transparent placeholder='Type Prize Five Here' maxLength="15" name="prizefive" value={prizefive} />
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card id="prizecard">
                    <Card.Content className="center">
                    
                        <Card.Header>
                            <Image src={require ("./images/prizesix.png")}/>
                        </Card.Header>

                        <Card.Description>
                        <Input size='huge' onChange={(e) => this.handleChange(e)} transparent placeholder='Type Prize Six Here' maxLength="15" name="prizesix" value={prizesix}/>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
            <br/>
            <br/> 
            <div className="center">
                 <Button  color="red" content="Submit" size="large" onClick={this.submit}></Button>
            </div>
           
            {this.state.message}
         
       

            </div>

        
        </>    
    )
        } else { 
            return (

            <>
                <div className="div14"> 
                    <img src={require("./images/prizecenter.png")} alt="" />
                </div>

                <div className="div15 center"> 
                    <br/>
                        <br/> 
                            <br/> 
                                <p className="a1 child-font">
                                    Prizes have been set!
                                </p>
                </div>
            </>
            )
          
        } 
    }
  
    
}


export default Prizes