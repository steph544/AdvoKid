import React from 'react'
import ChatBot from "react-simple-chatbot"
import {ThemeProvider} from "styled-components"

class ChatBot3 extends React.Component{
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
            width: "250px",
            height: "275px",
            floating: true
        };
    
    const steps=[
    {
        id: "Greet", 
        message: `Hi, ${this.props.currentUser.first_name}! Do you need help with rewarding?`, 
        trigger: "Display Options" 

    },
    {
        id: "Display Options", 
        options:[
            {
                value: "Yes", 
                label: "Yes",
                trigger: "explain"
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
        message: "Okay, no problem! You're an amazing parent, keep AdvoKidding!" , 
        end: true
    },
    {
        id: "explain", 
        message: "Is your child showing much expression on their face?", 
        trigger: "expression"

    },    
    {
        id: "expression", 
        options:[
            {
                value: "Yes", 
                label: "Yes",
                trigger: "reward"
            },
            {
                value: "No", 
                label: "No",
                trigger: "Not really"
            }
        ]
    },
    {
        id: "reward", 
        message: "Awesome, go ahead and give them some stars!", 
        end: true 

    }, 
    {
        id: "Not really", 
        message: "Okay no problem, encourage them to try showing a bigger expression next time. Still reward them with a few stars for trying.", 
        end: true

    }, 

];
         return (
        <ThemeProvider theme={theme}>
            <ChatBot headerTitle="Need Help?"
            userAvatar={this.props.currentUser.image} botAvatar={require("./images/dog.png")} hideSubmitButton="true" enableSmoothScroll="true"steps={steps} style={{width: '300px', height: '500px'}}/>
        </ThemeProvider>
        )
    }
       
    
}
export default ChatBot3;