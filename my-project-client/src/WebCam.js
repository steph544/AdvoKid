import React, {Component} from 'react'
import { Grid, Image } from 'semantic-ui-react'
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
    webcam: null
}
setRef = (webcam) => {
this.webcam = webcam;  
}

capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
        imageData: imageSrc 
    })
}

change=()=>{
    console.log("changed")
}

startVideo=()=> {
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
            
            const getPoints=()=>{
                this.setState=({
                    phrase: "I am Happy!"
                })
                }
           

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
                      this.capture()
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
              Row 1
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
                                 <img src={require("./images/startbtn.png")} onClick={this.startVideo}></img>
                          
                              <img src={this.state.imageData} alt=""/>
                         
                         
                          </div>
                  <Grid.Row> 
                   Row 1 in Column 2
                  </Grid.Row> 

                  <Grid.Row> Row 2 in Column 2
                      <Grid.Column>
                      Column 1 in Row 2 of Column 2
                      </Grid.Column>

                      <Grid.Column>
                      Column 2 in Row 2 of Column 2
                        
                      </Grid.Column>
                     
                         
                  </Grid.Row>  
              </Grid.Column>

              <Grid.Column centered width={6} textAlign='center'> 
                       <Grid.Row>   
                            <img src={require("./images/chicken_response2.svg")}/>
                      
                       </Grid.Row>

                       <Grid.Row>
                       <NavLink
                        to="/webcam"
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
             <div>
                 <button onClick={this.capture}>Capture Photo</button>
              </div>
          </Grid.Column>
          </Grid.Row>
      </Grid>
       

  </div>
    )}
  
    
}


export default WebCam