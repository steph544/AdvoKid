import React from 'react'
import ChatBot from "react-simple-chatbot"
import {ThemeProvider} from "styled-components"

class CustomChatBot extends React.Component{
subtractPoints=()=>{
    this.props.subtractPoints()
}
    
    render(){
            
   const theme={
    background: "white", 
    fontFamily: "Rockwell", 
    headerBgColor: "#ed372d",
    headerFontColor: "white", 
    headerFontSize: "35px", 
    botBubbleColor: "black",
    botFontColor: "white", 
    userBubbleColor: "red", 
    userFontColor: "white" 
    }
    
    const config= {
            width: "430px",
            height: "550px",
            floating: true
        };
    
    const steps=[
    {
        id: "Greet", 
        message: `Hi, ${this.props.currentChild.first_name}! Are you ready to win a prize?! You currently have ${this.props.childPoints} points. Would you like to use your points to spin the wheel?`, 
        trigger: "Display Options" 

    },
    {
        id: "Display Options", 
        options:[
            {
                value: "Yes", 
                label: "Yes",
                trigger: "play"
            },
            {
                value: "No", 
                label: "No",
                trigger: "No"
            }
        ]
    },
    {
        id: "No",
        message: "Okay, no problem! You're doing a great job, keep playing!" , 
        end: true
    },
    {
        id: "play", 
        message: "Each spin is 5 points. Ready to spin?", 
        trigger: "spin"

    },
    {
        id: "spin", 
        options:[
            {
                value: true, 
                label: "Yes",
                trigger: ()=>{
                    this.subtractPoints()
                    return "playgame"
                } 
            },
            {
                value: false, 
                label: "No",
                trigger: "No"
            }
        ]
    },
    {
        id: "playgame", 
        message: "Okay Great! Good luck!", 
        trigger: () =>{
            window.getPrize()
            return "you won"
        }

    },
    {
        id: "you won", 
        message: `Congratulations! You won a prize! Would you like to spin again?`, 
        trigger: "spin"

    }

];
         return (
        <ThemeProvider theme={theme}>
            <ChatBot headerTitle="Let's Play!"
            speechSynthesis={{ enable: true, lang: 'en' }} userAvatar={this.props.currentChild.image} botAvatar={require("./images/dog.png")} hideSubmitButton="true" steps={steps} style={{width: '400px', height: '750px'}} subtractPoints={this.props.subtractPoints}/>
        </ThemeProvider>
        )
    }
       
    
}
export default CustomChatBot;