import React from 'react'
import "./styles.css"
import ChildSignUpForm from './ChildSignUpForm.js'
import ChildProfile from "./ChildProfile.js"



class ChildSignUp extends React.Component{
    state={
        view: null,
        selectedChild: ""
    }

    selectChild=(value)=>{
        this.props.selectChild(value) 
        this.setState({
             view: "profile"
        })
    }

    renderSwitch=(param)=>{
        switch(param){
        case 'profile':
          return <ChildProfile currentUser={this.props.currentUser} currentChild={this.props.currentChild} selectChild={this.selectChild} />
        // case 'progress':
        //     return <Progress currentUser={this.state.currentUser}/>
        // case 'levels':
        //     return <Levels currentUser={this.state.currentUser}/>
        // case 'prizes':
        //     return <Prizes currentUser={this.state.currentUser}/>
        default: 
            return <ChildSignUpForm currentUser={this.props.currentUser} selectChild={this.selectChild} currentChild={this.props.currentChild}/>
        }
    }

    render(){
    //   if (this.props.location.aboutProps.currentChild === null){
    //       return ""
    //   } else {
           const { value } = this.state
           const { username, first_name, last_name, image } = this.state
          return(
            <>   
                {this.renderSwitch(this.state.view)}
            </>   
    )
// }
}
}

export default ChildSignUp