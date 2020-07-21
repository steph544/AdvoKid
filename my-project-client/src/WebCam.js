import React, {Component} from 'react'
import { Grid, Image, Modal, Message } from 'semantic-ui-react'
import { NavLink} from 'react-router-dom';
import Webcam from "react-webcam";
import "./styles.css"
import { Slide, LightSpeed, Bounce, Rotate } from 'react-awesome-reveal';




class WebCam extends React.Component{
  state={
    imageData: null, 
    image_name: "",
    saveImage: false, 
    webcam: null,
    phrase: "",
    open: false,
    photos: null 
}
setRef = (webcam) => {
this.webcam = webcam;  
}
close = () => this.setState({ open: false })

capture = () => {
   
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
    imageData: imageSrc, 
    open: true 
    })

    fetch("http://localhost:3000/images",
    {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
        screen_shot: imageSrc, 
        username: localStorage.user,
        child_id: this.props.location.aboutProps.currentChild.id 
    })
    })
    .then(res => res.json())
    .then(image=> 
      console.log(image)
    ) 
}

startVideo=()=> {
  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame ||
           window.oRequestAnimationFrame ||
           window.msRequestAnimationFrame ||
           function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
             return window.setTimeout(callback, 1000/60);
           };
  })();

this.webcam.video.play() 
    window.pModel.shapeModel.nonRegularizedVectors.push(9);
    window.pModel.shapeModel.nonRegularizedVectors.push(11);
            
    var ctrack = new window.clm.tracker({useWebGL : true});
    ctrack.init(window.pModel);
    var trackingStarted = false;
    ctrack.start(this.webcam.video);
    trackingStarted = true;
            

    var ec = new window.emotionClassifier();
    ec.init(window.emotionModel);
    var emotionData = ec.getBlank();
            

    const drawLoop=()=>{
        window.requestAnimFrame(drawLoop);
        var cp = ctrack.getCurrentParameters();
        var er = ec.meanPredict(cp); 

        if (er) {
            if (er[5].value > 0.6){ 
              window.requestAnimFrame = function() {};
              this.capture();
              this.setState({
                phrase: "GREAT JOB!"
              })
            }
        }
    }

    drawLoop();
}

componentDidMount(){
  fetch("http://localhost:3000/images",
  {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${localStorage.token}`,
      "Content-type": "application/json", 
      "Accept": "application/json"
    } 
  })
  .then(res => res.json())
  .then(data => 
    {
      console.log(data)
      this.setState({
        photos: data
      })
      
    }
  )
}

 
  render(){
    const videoConstraints={
        facingMode: 'user'
    }
    const { open, dimmer } = this.state;    
    return(
      <div className="levelone-bg-img">
          <br/>
            <br/>
              <br/>
                <br/>
                  <br/>
                    <br/>
                      <br/>
                       <br/>
      <Grid>
          <Grid.Row>
              <Grid.Column width={2}>
                   {/* <img style={{width: '140px'}} src={require('./images/star.png')} /> 
                   Column 1, Row 1 */}
              </Grid.Column>
              <Grid.Column centered width={5}>     
                          <div onClick={this.change}>
                            <img width="970" height="590" className="parent" src={require("./images/webcam_frame.png")}/>
                                  <Webcam className="webcam_position" width={600} height={400} ref={this.setRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} /> 
                              <br/>
                              <br/>
                                <div className="center">
                                  <img src={require("./images/startbtn.png")} onClick={this.startVideo}></img>
                                </div>
                                 
                          </div>
                  
                         
                  <Grid.Row> 
                  </Grid.Row> 

                  <Grid.Row> 
                      <Grid.Column>
                      </Grid.Column>

                      <Grid.Column>
                        
                        <Modal open={open} onClose={this.close} dimmer="blurring" size="small">
                          <Modal.Content>
                            <Image fluid src={this.state.imageData} alt="" />
                              <br/>
                            <Image fluid src={require("./images/greatjob.svg")} alt="" />
                          </Modal.Content>
                        </Modal>
                      </Grid.Column>
                     
                         
                  </Grid.Row>  
              </Grid.Column>

              <Grid.Column centered width={6} textAlign='center'> 
                       <Grid.Row>   
                            <img src={require("./images/chicken_response2.svg")}/>
                      
                       </Grid.Row>

                       <Grid.Row>   
                          <NavLink to={{
                                 pathname: "/response", 
                                aboutProps:{
                                    currentChild: this.props.location.aboutProps.currentChild 
                                }
                             }}>   
                            <img src={require("./images/backbtn.png")}></img> 
                          </NavLink> 
                          <NavLink to={{
                                 pathname: "/navMap", 
                                aboutProps:{
                                    currentChild: this.props.location.aboutProps.currentChild 
                                }
                             }}>   
                              <img src={require("./images/nextbtn.png")}></img> 
                          </NavLink>
                       </Grid.Row>
                       

              </Grid.Column>
          </Grid.Row>
          
          <Grid.Row>
            <Grid.Column width={8}>
            </Grid.Column>

            <Grid.Column width={8}>
            </Grid.Column>
          </Grid.Row>
      </Grid>
       

  </div>
    )}
  
    
}


export default WebCam