import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import './styles.css'


function Voice(props) {
    const SpeechRecognition=
    window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition= new SpeechRecognition();




    recognition.onstart=function(){
        navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();

        const audioChunks = [];
        mediaRecorder.addEventListener("dataavailable", event => {
            audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener("stop", () => {
            const audioBlob = new Blob(audioChunks);
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.play();
        });

        setTimeout(() => {
            mediaRecorder.stop();
        }, 5000);
        });
    }

    recognition.onresult=function(event){
        const current = event.resultIndex;

        const transcript= event.results[current][0].transcript;
        const transcriptOutput=document.getElementById("transcript")
        transcriptOutput.textContent=transcript

        if(transcript==="hello"){
            const transcriptTitle=document.getElementById("correct")
            transcriptTitle.textContent="CORRECT!"
        }
    }


    return(  
        <>
            <div class="voice-bg-img voice_grid">
                <div className="div10">
                    <img width="100%" height="100%" src={require("./images/chalkboard.png")} hidefocus="true"/> 
                
                    
                 </div>  

                <div className="div12 child_phrase child-font2">
                    <h1 className="child-font2">
                        How are you doing today? 
                    </h1>
                    <Button onClick={()=>{recognition.start()}} inverted color='blue' size="large" content='Respond' />
                        {/* <button >Respond</button> */}
                    <h3 className="child-font2" id="transcript"></h3>
                    <h1 id="correct"></h1>  
                </div>
                 

                 <div className="div11">
                 <img width="100%" height="100%" src={require("./images/genie.png")} hidefocus="true"/> 
                 </div>
                 <div className="div13">
                     <br/> 
                     <br/>
                    <Link to={{
                        pathname: "/navMap",
                        aboutProps:{
                            currentChild: props.location.aboutProps.currentChild
                        }}
                        }>   
                        <img height="80%" src={require("./images/backbtn.png")} hidefocus="true"/> 
                    </Link>
                </div>

            </div>    
           
               
         </>   
    )
}


export default Voice


