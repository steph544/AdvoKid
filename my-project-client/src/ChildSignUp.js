import React, {Component} from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import "./styles.css"
import { Dropdown, Grid} from 'semantic-ui-react'




class ChildSignUp extends React.Component{
    state={
        childPicture: "https://via.placeholder.com/150",
        options: [ 
            { key: 1, text: 'Please Sign Up Child', value: 'One' },
            { key: 2, text: 'Level Two', value: 'Two' },
            { key: 3, text: 'Level Three', value: 'Three'},
            // { key: 4, text: 'Level Four', value: 'Four' },
            // { key: 5, text: 'Level Five', value: 'Five' },
            // { key: 6, text: 'Level Six', value: 'Six' },
            // { key: 7, text: 'Level Seven', value: 'Seven' },
          ], 
          blank: "blank"
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount(){
        if (this.props.currentUser === null) {
            this.setState({
                blank: "not blank"
            })
          }

        // if (this.props.currentUser.children.length === 0) {
        //     this.setState({
        //         options: [...this.state.options, {key: 2, text: 'Hello', value: 'Hello'}]
        //     })
        //   }
    
        // if(this.props.currentUser.children){
        //       this.props.currentUser.children.map((child, index) => this.setState({
        //     options:[...this.state.options, {key: index, text: child.first_name, value: index}]
        // })
        // )
        // }
      
    }

     // upload=()=>{
    //     fetch("http://localhost:3000/children/",
    //     {
    //     method: "POST",
    //     headers: {
    //         "Content-Type" : "application/json"
    //     },
    //     body: JSON.stringify({
    //         screen_shot: imageSrc, 
    //         username: localStorage.user
    //     })
    //     })
    //     .then(res => res.json())
    //     .then(image=> 
    //       console.log(image)
    //     ) 
    // }
    handleChange = (e, { value }) => this.setState({ value })

    render(){
    
        const { value } = this.state
        const { username, password, email, first_name, last_name } = this.state
          return(
            <>
                <div class="div28">
                     <Grid columns={2}>
                        <Grid.Column >
                        <Dropdown
                            style={{width: '450px'}}
                            onChange={this.handleChange}
                            options={this.state.options}
                            placeholder='Choose a Child or Sign Up Below'
                            selection
                            value={value}
                        />
                        </Grid.Column>
                    </Grid>
                </div>
                    
            <div class="div24"> 
            <img src={this.state.childPicture} width="450px"/>            
                     <img onClick={this.upload} src={require('./images/addchildpicbtn.svg')} width="450px"/>
            </div>

            <div class="div25"> 
            <form>
                <br/>
                <br/>

                <img className="signup_img" src={require('./images/first_name.png')}/>
                <   br/> 
                <input type="text" name="first_name" onChange={(e) => this.handleChange(e)} value={first_name}></input>
                    <br/>
                    <br/>
                <img className="signup_img" src={require('./images/last_name.png')}/>
                    <br/>
                <input type="text" name="last_name" onChange={(e) => this.handleChange(e)} value={last_name}></input>
                    <br/>
                    <br/>
                <img className="signup_img" src={require('./images/age.png')}/>
                    <br/>
                <input type="text" name="username" onChange={(e) => this.handleChange(e)} value={username}></input>
                    <br/>
                    <br/>
                <img className="yellowbutton" src={require('./images/submitbutton.png')} onClick={(e) => this.signUp(e)}/> 
        
            </form>
            </div>

            <div className="div26">
                <img width="100%" height="95%" src={require("./images/dog.png")}/> 
                <br/>
                <NavLink
                    to="/navMap"                        
                    > 
                        <img src={require('./images/letsplaybtn.png')} width="450px"/>
                </NavLink> 
               

            </div>
                      
           
               </>    
    
             
    )
    }
  
    
}


export default withRouter(ChildSignUp)