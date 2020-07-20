import React, {Component, useState} from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import "./styles.css"
import { Dropdown, Grid} from 'semantic-ui-react'




class ChildSignUp extends React.Component{
    state={
        childPicture: "https://via.placeholder.com/150",
        options: [],
        loading: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount(){ 
        if(this.props.currentUser.children)
        {this.props.currentUser.children.map((child, index) => this.setState({
            options:[...this.state.options, {key: index, text: child.first_name, value: index}]
        })
        )} else {
            this.setState({
                options: [{key: "No Current Children", text: "No Current Children", value: "No Current Children"}]
        })
    }}

    //  upload=()=>{
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
    // handleChange = (e, { value }) => this.setState({ value })

    // uploadWidget() {
    //     cloudinary.openUploadWidget({ cloud_name: 'dt5tuiuls', upload_preset: 'child_profile', 
    //         function(error, result) {
    //             console.log(result);
    //         }
    // })}
    // const [loading, setLoading] = useState(false)
    // const [image, setImage] = useState("")

    uploadImage=(e)=>{
        const files = e.target.files 
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'child_profile')
        fetch("https://api.cloudinary.com/v1_1/dt5tuiuls/image/upload", {
            method: 'POST',
            body: data
        })
        .then(res=>res.json())
        .then(file=> this.setState({
            loading: false, 
            childPicture: file.secure_url 
        }))
       
    }

    childSignUp = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/children", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
              
                first_name: this.state.first_name,
                last_name: this.state.last_name,   
                age: this.state.username, 
                image: this.state.childPicture, 
                username: localStorage.user 
               
            })
        })
        .then(res => res.json())
        .then(childInfo => 
            {
                console.log(childInfo)
      
        }
        )
        
    }

    render(){
      
        const { value } = this.state
        const { username, first_name, last_name, image } = this.state
          return(
            <>
                {/* <div class="div6">
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
                </div> */}
                    
            <div class="div2 image-upload">
            <label for="file-input"> 
                 <img className="avatar" src={this.state.childPicture} width="400px" height="400px"/>
                 <br/>
                 <img src={require('./images/addchildpicbtn.svg')} width="450px"/>
            </label>      
            <br/> 
            {/* <input  id="file-input" type="file" name="file" onChange={(e)=>this.uploadImage(e)}/> */}
            <input  id="file-input" type="file" name="image" onChange={(e) => this.uploadImage(e)} value={image}/>
            <br/>
        
            </div>

            <div class="div3"> 
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
                <img src={require('./images/submitbutton.png')} onClick={(e) => this.childSignUp(e)}/> 
        
            </form>
            </div>

            <div className="div4">
                <img width="90%" height="80%" src={require("./images/dog.png")}/> 
                <br/>
                <br/> 
                <br/>
                <br/>
                <NavLink to="/navMap">  
                <img src={require('./images/letsplaybtn.png')} width="450px"/>
                </NavLink> 
               

            </div>
                      
           
               </>    
    
             
    )
    }
  
    
}


export default withRouter(ChildSignUp)