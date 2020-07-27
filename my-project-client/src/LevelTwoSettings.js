import React from 'react'
import "./styles.css"
import { Grid } from 'semantic-ui-react'

    
class LevelTwoSettings extends React.Component{
    state = {
        currentUser: JSON.parse(localStorage.getItem("currentUser")).id,
        submitted: false, 
        currentChildPhrases: "",
        firstphrase: "",
        secondphrase: "",
        thirdphrase: "",
        message: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if (localStorage.currentChild !== "null"){
            this.state.currentChild = JSON.parse(localStorage.getItem("currentChild")).id
        } 
    }

    handleSubmit = () => this.setState({ first_phrase: '', second_phrase: '', third_phrase: ''})
        
    notify=()=>{
      this.setState({
          submitted: true,
          message: "Phrases have been submitted"
      })
    }

    submitPhrase = (e) => {
        e.preventDefault()
       if(this.state.currentChild !== null){
        //    if (this.state.currentChildPhrases.id){
        //         fetch(`http://localhost:3000/phrases/${this.state.currentChildPhrases.id}`, {
        //             method: "PATCH",
        //             headers: {
        //                 "Content-type": "application/json"
        //             },
        //             body: JSON.stringify({
        //                 id: this.state.currentChildPhrases.id, 
        //                 phrase_one: this.state.firstphrase,
        //                 phrase_two: this.state.secondphrase,   
        //                 phrase_three: this.state.thirdphrase, 
        //                 user_id: this.state.currentUser,
        //                 child_id: this.state.currentChild
        //             })
        //         })
        //         .then(res => res.json())
        //         .then(phrase => 
        //             {
        //                 console.log(phrase)
        //                 localStorage.setPhrases=phrase 
        //                 this.notify()
        //         })
        //    } else{
            fetch(`http://localhost:3000/phrases/`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    phrase_one: this.state.firstphrase,
                    phrase_two: this.state.secondphrase,   
                    phrase_three: this.state.thirdphrase, 
                    user_id: this.state.currentUser,
                    child_id: this.state.currentChild
                })
            })
            .then(res => res.json())
            .then(phrase => 
                {
                    console.log(phrase)
                    this.notify()
            })
           } 
         
                    
                // }  
        
    }
    componentDidMount(){
        if (!this.state.currentUser.phrases){return (
            console.log("no phrases")
        )}
        fetch("http://localhost:3000/phrases",
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

           this.setState({
            currentChildPhrases: data.filter(obj=> obj.child_id === JSON.parse(localStorage.getItem("currentChild")).id).pop(),
            firstphrase: data.filter(obj=> obj.child_id === JSON.parse(localStorage.getItem("currentChild")).id).pop().phrase_one,
            secondphrase: data.filter(obj=> obj.child_id === JSON.parse(localStorage.getItem("currentChild")).id).pop().phrase_two, 
            thirdphrase: data.filter(obj=> obj.child_id === JSON.parse(localStorage.getItem("currentChild")).id).pop().phrase_three  

           }) 
            
        }
    )}

    render(){
     
        const { firstphrase, secondphrase, thirdphrase } = this.state
        // if (this.state.submitted === false)
        // {
            return(
      
            <div>
            
            <Grid centered columns={2}>
                <Grid.Column className="center" style={{position: 'absolute', top:'10%', left:'25%'}}>
                    <div>
                        <div className="center">
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/>
                            <img width="50%" alt="" src={require("./images/leveltwobanner.png")}/>
                            <br/><br/>
                            <br/>
                                <form>
                                    <img width="25%" alt="" className="signup_img" src={require('./images/firstphrase.png')}/>
                                    <br/>
                                    <input placeholder={this.state.firstphrase} className="rounded-input" type="text" name="firstphrase" onChange={(e) => this.handleChange(e)} value={firstphrase} maxlength="50"></input>
                                        <br/>
                                        <br/>
                                    <img width="25%" alt="" className="signup_img" src={require('./images/secondphrase.png')}/>
                                    <br/>
                                    <input placeholder={this.state.secondphrase} className="rounded-input" type="text" name="secondphrase" onChange={(e) => this.handleChange(e)} value={secondphrase} maxlength="50"></input>
                                        <br/>
                                        <br/>
                                    <img width="25%" alt="" className="signup_img" src={require('./images/thirdphrase.png')}/>
                                    <br/>
                                    <input placeholder={this.state.thirdphrase} className="rounded-input" type="text" name="thirdphrase" onChange={(e) => this.handleChange(e)} value={thirdphrase} maxlength="50"></input>
                                        <br/>
                                        <br/>
                                     <img width='20%' alt="" src={require('./images/submitbutton.png')} onClick={(e) => this.submitPhrase(e)}/> 
                                  
                                     </form>
                                     <br/>
                                <h1 className="child-font2, a2">{this.state.message}</h1>
                        </div>
                        
                    </div>
                </Grid.Column>
            </Grid>
            
        </div>
        )}
    //     else {
    //     return(
     
    //     )
    // } 
    // }
  
    
}


export default LevelTwoSettings