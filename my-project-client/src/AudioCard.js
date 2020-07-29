import React from 'react'
import {Card, Button, Rating, Progress} from 'semantic-ui-react'
import "./styles.css"
import AudioVisualizer from "./AudioVisualizer.js"



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
            this.setState((prevState) => ({
                percent: prevState.percent === 0 ? 100 : 0,
            })
        ))
    }
     
    playAudio=()=>{
        const audio2 = this.props.recording.audio
        // const audioUrl = URL.createObjectURL(audio);
        // const audio2 = new Audio(audioUrl);
        audio2.play();
        console.log(audio2)
    }

    handleRate = (e, { rating, maxRating }) =>
      this.setState({ rating, maxRating })
        
    delete=(recording)=>{
        fetch(`http://localhost:3000/recordings/${this.props.recording.id}`, {
            method: 'DELETE'
        })
            this.props.deleteRecording(recording)
    }

    render(){

          return(
        <> 
     
            <Card color='orange'>
            <AudioVisualizer height="20px" width="75px" audio={this.props.recording.audio}/>
{/*      
                <br/> 
            <audio controls style={{width: "200px"}}>
                <source src={this.props.recording.audio} type="audio/ogg"></source>
            </audio> */}
   
          <div id="waveform"></div>
             
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