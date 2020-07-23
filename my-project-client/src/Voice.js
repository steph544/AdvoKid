import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import './styles.css'
import PhraseDisplay from "./PhraseDisplay.js"


function Voice(props) {

    const phrases=(data)=>{
        if (localStorage.currentChild !== "null"){
               let currentChildPhrases= data.filter(obj=> obj.child_id === JSON.parse(localStorage.getItem("currentChild")).id).pop()

        // localStorage.setItem( 'currentChildPhrases', JSON.stringify(currentChildPhrases)) 
                setData(currentChildPhrases)
        localStorage.phraseFetch= "done" 
       
        }
     
    }
    const [currentChildPhrases, setData] = useState("");

    useEffect(()=>{fetch("http://localhost:3000/phrases",
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
            phrases(data)       
        }
    )})
    
    const logAudio=(audio)=>{
        fetch("http://localhost:3000/recordings",
        {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            audio: audio, 
            level_id: 2,
            child_id: props.location.aboutProps.currentChild.id 
        })
        })
        .then(res => res.json())
        .then(audio=> 
          console.log(audio)
        ) 
    }


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
            logAudio(audioUrl)
            // console.log(audioUrl)
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

    if (localStorage.phraseFetch === "done"){
        return(  
        <>
            <div class="voice-bg-img voice_grid">
                <div className="div10">
                    <img width="100%" height="100%" src={require("./images/chalkboard.png")} hidefocus="true"/> 
                
                    
                 </div>  
                 <div className="div12 child_phrase child-font2">
                {/* <div className="div12 child_phrase child-font2">
                    <h1 className="child-font2">
                        {JSON.parse(localStorage.getItem("currentChildPhrases")).phrase_one} 
                    </h1>
                    <Button onClick={()=>{recognition.start()}} inverted color='blue' size="large" content='Respond' />

                    <Button onClick={()=>{nextPhrase()}} inverted color='blue' size="large" content='Next' />

                    <h3 className="child-font2" id="transcript"></h3>
                    <h1 id="correct"></h1>  
                </div> */}
                    {currentChildPhrases.phrase_one}
            {/* {JSON.parse(localStorage.getItem("currentChildPhrases")).phrase_one} */}
                    <br/> 
                    <br/>
                    <br/> 
                    <Button onClick={()=>{recognition.start()}} inverted color='blue' size="large" content='Respond' />
              
                               
                 
{/* 
                    <Button onClick={()=>{nextPhrase()}} inverted color='blue' size="large" content='Next' /> */}

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
    )}
}


export default Voice


