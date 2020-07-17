import React, {Component} from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import "./styles.css"
import {ReactComponent as TV} from './images/tv.svg';
import {ReactComponent as Chicken} from './images/chicken.svg';
import Webcam from "react-webcam";
import { Slide, LightSpeed, Bounce, Rotate } from 'react-awesome-reveal';
import ScriptTag from 'react-script-tag'
// import "%PUBLIC_URL%/clmtrackr/build/clmtrackr.js"
// import "./clmtracker-webcam.js"
// import "./js/libs/utils.js"
// import "./build/clmtrackr.js"
// import "./models/model_pca_20_svm.js"
// import "./js/libs/Stats.js"
// import "./js/libs/d3.min.js"
// import "./js/emotion_classifier.js"
// import "./js/emotionmodel.js"


class LevelOne extends React.Component{
    state={
        phrase:""
    }
    // constructor(props){
    //     super()
        
    //     this.videoref=React.createRef()
    // }

    // function changePic(){
    //     const character = document.getElementById('character')
    //     character.src=('./images/zombie.png')
    // }

setRef =(webcam)=>{
this.webcam=webcam 
}


    
componentDidMount(){
    /*global google*/
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
                
              
                function getPoints(){
                    this.setState=({
                        phrase: "I am Happy!"
                    })
                    }
          

               function drawLoop(){
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
                          console.log("stephanie")
                        }
                        
                        
                        // pointsAdded(er)
                       
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
  
render(){
    return(
        
         <div className="levelone-bg-img">
             {/* <ScriptTag isHydrating={true} type="text/javascript" src="./clmtracker-webcam.js" />
             <ScriptTag isHydrating={true} type="text/javascript" src="./js/libs/utils.js" />
             <ScriptTag isHydrating={true} type="text/javascript" src="./build/clmtrackr.js" />
             <ScriptTag isHydrating={true} type="text/javascript" src="./models/model_pca_20_svm.js" />
             <ScriptTag isHydrating={true} type="text/javascript" src="./js/libs/Stats.js" />
             <ScriptTag isHydrating={true} type="text/javascript" src="./js/libs/d3.min.js" />
             <ScriptTag isHydrating={true} type="text/javascript" src="./js/emotion_classifier.js"/>
             <ScriptTag isHydrating={true} type="text/javascript" src="./js/emotionmodel.js"/> */}
            <Grid>
                <Grid.Row>
                    <Grid.Column width={1}>

                    </Grid.Column>
                    <Grid.Column centered width={7}>
                        <Grid.Row>
                            <img style={{width: '140px'}} src={require('./images/star.png')} /> 
                        </Grid.Row> 

                        <Grid.Row className="parent">
                            <TV className="tv" float='right'/> 
                           
                        </Grid.Row>  

                  
                    </Grid.Column>
                    <Grid.Column centered width={6} textAlign='center'> 
                             <Webcam className="webcam-position2" width={400} height={300} ref={this.setRef}/>
                            <Chicken className="character"/> 
                    </Grid.Column>
                </Grid.Row>
                
                <Grid.Row>
                <Grid.Column width={8}>
                </Grid.Column>
                <Grid.Column width={8}>
                    Column 4
            <h1>{this.state.phrase}</h1>
                </Grid.Column>
                </Grid.Row>
            </Grid>
             
	
        </div>

        
    )
}
    
    
}


export default LevelOne