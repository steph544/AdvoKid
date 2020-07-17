import React, {Component} from 'react'
import { Grid, Image, Modal, Message } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
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
    open: false
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
    });
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
            console.log(this.webcam.video)
            trackingStarted = true;
            

            var ec = new window.emotionClassifier();
    ec.init(window.emotionModel);
            var emotionData = ec.getBlank();
            

           const drawLoop=()=>{
                window.requestAnimFrame(drawLoop);
                // overlayCC.clearRect(0, 0, vid_width, vid_height);
                //psrElement.innerHTML = "score :" + ctrack.getScore().toFixed(4);
                // if (ctrack.getCurrentPosition()) {
                // 	ctrack.draw(overlay);
                          // }
                          // var positions= ctrack.getCurrentPosition();
                          // console.log(positions)
                var cp = ctrack.getCurrentParameters();
                        
                          var er = ec.meanPredict(cp); 
                          console.log(er)
                if (er) {
                    if (er[5].value > 0.5){ 
                      window.requestAnimFrame = function() {};
                      this.capture();
                      this.setState({
                        phrase: "GREAT JOB!"
                      })
                    }
                    
                    
                   
                   
        // window.updateData(er);
        // for (var i = 0;i < er.length;i++) {
        // 	if (er[i].value > 0.4) {
        // 		document.getElementById('icon'+(i+1)).style.visibility = 'visible';
        // 	} else {
        // 		document.getElementById('icon'+(i+1)).style.visibility = 'hidden';
        // 	}
        // }
      }
            }
            drawLoop();
}

// changePage=()=>{
//   this.props.changePage("webcam")
// }

// changePage2=()=>{
//   this.props.changePage("video")
// }
 
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
              <Grid.Column width={1}>
                   {/* <img style={{width: '140px'}} src={require('./images/star.png')} /> 
                   Column 1, Row 1 */}
              </Grid.Column>
              <Grid.Column centered width={7}>     
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
                       <NavLink
                        to="/navMap"
                        > 
                          <img src={require("./images/nextbtn.png")}></img> 
                        </NavLink> 
                    

                        <NavLink
                        to="/response"
                        > 
                          <img src={require("./images/backbtn.png")}></img> 
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