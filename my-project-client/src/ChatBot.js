import React, {Component} from 'react'
import ChatBot from "react-simple-chatbot"
import {ThemeProvider} from "styled-components"

function CustomChatBot(props){
    const theme={
        background: "white", 
        fontFamily: "Rockwell", 
        headerBgColor: "red",
        headerFontColor: "white", 
        headerFontSize: "35px", 
        botBubbleColor: "black",
        botFontColor: "white", 
        userBubbleColor: "red", 
        userFontColor: "white" 
    };
    {
        const config={
            width: "300px",
            height: "400px",
            floating: true
        };
    }
    const steps=[
        {
            id: "Greet", 
            message: `Hi, ${props.currentChild.first_name}! Are you ready to win a prize?! You currently have ${props.childPoints} points. Would you like to use your points to spin the wheel?`, 
            trigger: "Display Options" 

        },
        {
            id: "Display Options", 
            options:[
                {
                    value: "Yes", 
                    label: "Yes",
                    trigger: "Yes"
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
            message: "Okay, no problem! Thanks for stopping by!", 
            end: true
        },
        {
            id: "Yes", 
            user: true, 
            message: "Each spin is 5 points. Ready to spin the wheel?", 
            end: true

        }
    
    ];
         
        return (
        <ThemeProvider theme={theme}>
            <ChatBot steps={steps}/>
        </ThemeProvider>
        )
    
}
export default CustomChatBot;