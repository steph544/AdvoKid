import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import {Card, Image, Button, Rating, Progress, Modal, Header} from 'semantic-ui-react'
import "./styles.css"

class PhotoCard extends React.Component{
    state = { 
        percent: 0,
        rating: 0 
    }

    toggle = () => {       
        fetch("http://localhost:3000/points", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                child_id: this.props.currentChild.id, 
                total: this.state.rating
            })
        })
        .then(res => res.json())
        .then(point => 
            {console.log(point)},
            this.setState((prevState) => ({
                percent: prevState.percent === 0 ? 100 : 0,
            })
        )
      )}
     

    handleRate = (e, { rating, maxRating }) =>
      this.setState({ rating, maxRating })
        
    delete=(image)=>{
        fetch(`http://localhost:3000/images/${this.props.photo.id}`, {
            method: 'DELETE'
        })
            this.props.deletePhoto(image)
    }

    render(){
          return(
        <> 
            <Card color='orange'>
                <Modal basic size="large" trigger={ <Image src={this.props.photo.screen_shot}/>}>
                    <Modal.Content image>
                    <Image wrapped rounded fluid size='big' src={this.props.photo.screen_shot} />
                    <Modal.Description>
                        
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
               <Progress percent={this.state.percent} autoSuccess />
               <Card.Content extra>
                   <Rating icon='star' defaultRating={0} maxRating={4} onRate={this.handleRate} /> 
                   <div className='ui two buttons'>
                     
                     <Button basic color='green' onClick={this.toggle}>
                        Reward
                    </Button>
                    <Button basic color='black' onClick={()=>this.delete(this.props.photo)}>
                        Delete
                    </Button>
                    </div>
                   
                </Card.Content>
           </Card>
        </>    
    )
    }
  
    
}


export default PhotoCard