import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import './styles.css'


function Voice(props) {
    const SpeechRecognition=
    window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition= new SpeechRecognition();

    recognition.onstart=function(){
        console.log("voice is activated, you can speak into microphone");
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
                

            </div>    
            
                {/* <Link to={{
                    pathname: "/navMap",
                    aboutProps:{
                        currentChild: props.location.aboutProps.currentChild
                    }}
                    }>   
                <h1> Back to NavMap</h1> 
                </Link> */}
           

     
         </>   
    )
}


export default Voice


