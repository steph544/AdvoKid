import React from 'react'
import "./styles.css"
import {Card, Input, Button, Image, Header, Modal, Table, Icon, Menu} from 'semantic-ui-react'
import PrizeTable from "./PrizeTable.js"

class Prizes extends React.Component{

    state={
        incentives: [],
        submitted: false,
        message: "",
        currentPrizes: [], 
        displayedPrizes: []
    }
   
    handleChange=(e)=>{   
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    deletePrize=(value)=>{
        this.setState({
            displayedPrizes: this.state.displayedPrizes.filter(prize => prize !== value)
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

    componentDidMount(){
        if (this.props.currentChild !== null)
        {fetch(`http://localhost:3000/prizes`, 
        {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${localStorage.token}`,
            "Content-type": "application/json", 
            "Accept": "application/json"}
        })
             .then(res => res.json())
             .then(prizes => 
                 this.setState({
                     currentPrizes: prizes.filter(prize => prize.child_id === this.props.currentChild.id),
                     displayedPrizes: prizes.filter(prize => prize.child_id === this.props.currentChild.id)
                 })
                 )
    }}

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
                 <Button  color="red" content="Set Prizes" size="large" onClick={this.submit}></Button>
                 <Modal trigger={  <Button  color="red" content="Current Prizes" size="large" ></Button>}>
    <Modal.Header> <img src={require("./images/currentprizebanner.png")}/> </Modal.Header>
    <Modal.Content image>
      <Modal.Description>
      <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Prize Won</Table.HeaderCell>
        <Table.HeaderCell>Date Won</Table.HeaderCell>
        <Table.HeaderCell>Redeemed</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {this.state.displayedPrizes.map(prize =>
            <PrizeTable key={prize.id} deletePrize={this.deletePrize} prize={prize}/>
        )
        }
      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
      </Modal.Description>
    </Modal.Content>
  </Modal>
                 {/* <Button  color="red" content="Current Prizes" size="large" ></Button> */}
            </div>
           
            {this.state.message}
         
       

            </div>

        
        </>    
    )
        } else { 
            return (

            <>
                <div className="div14 center"> 
                    <img src={require('./images/setprizes.png')}/>
                </div>

                
            </>
            )
          
        } 
    }
  
    
}


export default Prizes