import React from 'react'
import "./styles.css"


    
class LevelIntro extends React.Component{
    state = {
    }

    render(){
     
        return(
            <div style={{position: 'absolute', top:'20%', left:'30%'}}>
                <img alt="" width="60%" src={require("./images/setlevelsbanner.png")}/>
                <br/>
                <img alt="" width="70%" src={require("./images/cycle.png")}/>
            </div>
        )
    }

}


export default LevelIntro