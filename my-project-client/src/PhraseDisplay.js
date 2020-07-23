import React, {Component} from 'react'
  import "./styles.css"



class PhraseDisplay extends React.Component{

    state={
        view: null 
    }

    renderSwitch=(param)=>{
        // switch(param){
        //     case 'phrase_one':
        //         return {JSON.parse(localStorage.getItem("currentChildPhrases")).phrase_one}
        //     case 'phrase_two':
        //         return {JSON.parse(localStorage.getItem("currentChildPhrases")).phrase_two}
        //     case 'phrase_three':
        //         return {JSON.parse(localStorage.getItem("currentChildPhrases")).phrase_three}
        //     default:
        //         return <h1>How are you doing today?</h1>
        // }
    }

    render(){
      return( 
            <h1 className="child-font2">
                {this.state.view}
            </h1>
       
    )}
    
}

export default PhraseDisplay

