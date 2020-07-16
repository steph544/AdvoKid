import React, {Component} from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import "./styles.css"
import {ReactComponent as TV} from './images/tv.svg';
import {ReactComponent as Chicken} from './images/chicken.svg';
import { Slide, LightSpeed, Bounce, Rotate } from 'react-awesome-reveal';
import ScriptTag from 'react-script-tag'
// import "./clmtracker-webcam.js"
// import "./js/libs/utils.js"
// import "./build/clmtrackr.js"
// import "./models/model_pca_20_svm.js"
// import "./js/libs/Stats.js"
// import "./js/libs/d3.min.js"
// import "./js/emotion_classifier.js"
// import "./js/emotionmodel.js"


function LevelOne(){

    // function changePic(){
    //     const character = document.getElementById('character')
    //     character.src=('./images/zombie.png')
    // }




  

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
                        
                                {/* <<----Webcam begins----> */}
                        <div id="content" className="webcam-position">
                            <h2>Emotion detection example</h2>
                            <div id="webcam-container" >
                                <video id="videoel" width="385" height="300" preload="auto" loop playsinline autoplay>
                                </video>

                                <canvas id="overlay" width="400" height="300"></canvas>
                            </div>

                            <div id="emotion_container">
                                <div id="emotion_icons">
                                    <img class="emotion_icon" id="icon1" src="./media/icon_angry.png"></img>
                                    <img class="emotion_icon" id="icon2" src="./media/icon_sad.png"></img>
                                    <img class="emotion_icon" id="icon3" src="./media/icon_surprised.png"></img>
                                    <img class="emotion_icon" id="icon4" src="./media/icon_happy.png"></img>
                            </div>
                            <div id='emotion_chart'></div>
                            </div>
                            <div id="controls">
                                <input class="btn" type="button" value="wait, loading video" disabled="disabled" onclick="startVideo()" id="startbutton"></input>
                                <input class="btn" type="button" value="Stop" onclick="stopVideo()" id="stopbutton"></input>
                            </div>
                        </div>
                                    {/* <<----Webcam ends----> */}
                            
                                    <Chicken className="character"/> 
                        </Grid.Row>  

                  
                    </Grid.Column>
                    <Grid.Column centered width={6} textAlign='center'> 
                            <TV className="tv" float='right'/> 
                    </Grid.Column>
                </Grid.Row>
                
                <Grid.Row>
                <Grid.Column width={8}>
                </Grid.Column>
                <Grid.Column width={8}>
                    Column 4
                </Grid.Column>
                </Grid.Row>
            </Grid>
             
	
        </div>

        
    )
    
}


export default LevelOne