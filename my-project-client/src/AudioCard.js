import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import {Card, Image, Button, Rating, Progress, Modal, Header} from 'semantic-ui-react'
import "./styles.css"

class AudioCard extends React.Component{
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
     
    // playAudio=()=>{
    //     const audio = this.props.recording.audio.replace(/['"]+/g, '')
    //     const audioUrl = URL.createObjectURL(audio);
    //     const audio2 = new Audio(audioUrl);
    //     audio2.play();
    //     console.log(audio)
    // }

    handleRate = (e, { rating, maxRating }) =>
      this.setState({ rating, maxRating })
        
    delete=(audio)=>{
        fetch(`http://localhost:3000/recordings/${this.props.photo.id}`, {
            method: 'DELETE'
        })
            this.props.deleteRecording(audio)
    }

    render(){
       
        // const audio = (this.props.recording.audio).replace(/['"]+/g, '') 
        // console.log(audio)
        // const audioPlay=new Audio(audio)
        // console.log(audio)
          return(
        <> 
            <Card color='orange'>
                {/* <Button onClick={this.playAudio} color="red" content="Hear Audio"></Button> */}
               <Progress percent={this.state.percent} autoSuccess color='green'/>
               <Card.Content extra>
                   <Rating icon='star' defaultRating={0} maxRating={4} onRate={this.handleRate} /> 
                   <div className='ui two buttons'>
                     
                     <Button basic color='green' onClick={this.toggle}>
                        Reward
                    </Button>
                    <Button basic color='black' onClick={()=>this.delete(this.props.recording)}>
                        Delete
                    </Button>
                    </div>
                   
                </Card.Content>
           </Card>
        </>    
    )
    }
  
    
}


export default AudioCard