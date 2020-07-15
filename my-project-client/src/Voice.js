import React from 'react';
import {connect} from 'react-redux'



function Voice() {
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
        transcriptOutput.textContent=transcript.toUpperCase()

        if(transcript==="hello"){
            const transcriptTitle=document.getElementById("correct")
            transcriptTitle.textContent="CORRECT!"
        }
    }


    return(  
            <div class="voice-bg-img">
                <button onClick={()=>{recognition.start()}}>Respond</button>
                <h3 id="transcript"></h3>
                <h1 id="correct"></h1>
            </div>

         
            
    )
}

const mapStateToProps=state=>({
    users: state.users
})
export default connect(mapStateToProps)(Voice)

