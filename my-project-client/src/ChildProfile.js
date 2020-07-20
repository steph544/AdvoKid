import React, {Component, useState} from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import "./styles.css"
import { Dropdown, Grid} from 'semantic-ui-react'




class ChildProfile extends React.Component{
    state={
        childPicture: "https://via.placeholder.com/150",
        options: [],
        loading: false,
        selectedChild: ""
    }

    selectChild = (e, { value }) => this.props.selectChild({ value })

    componentDidMount(){ 
        if(this.props.currentUser.children){
            let array = this.props.currentUser.children.map((child, index) => ({key: index, text: child.first_name, value: child}))
            this.setState({
                options: array
            })
        }
        else {
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
        .then(child => 
            {
                console.log(child)
               this.props.selectChild(child)
        }
        )
        
    }

    render(){
      
        const { value } = this.state
        const { username, first_name, last_name, image } = this.state
          return(
        <>
            <>        
            <div class="div2 image-upload">
                <label for="file-input"> 
                    <img className="avatar" src={this.props.currentChild.value.image} width="400px" height="400px"/>
                        <br/>
                            
                </label>      
                    <br/> 
                <input  id="file-input" type="file" name="image" onChange={(e) => this.uploadImage(e)} value={image}/>
                    <br/>
            </div>

            <div class="div8"> 
            <Grid columns={2}>
                <Grid.Column >
                <Dropdown
                    style={{width: '450px'}}
                    onChange={this.selectChild}
                    options={this.state.options}
                    placeholder='Choose a Child or Sign Up Below'
                    selection
                    value={value}
                />
                </Grid.Column>
            </Grid>
                <img className="signup_img" src={require('./images/first_name.png')}/>
                        <br/> 
                    {this.props.currentChild.value.first_name}
                        <br/>
                            <br/>
                    <img className="signup_img" src={require('./images/last_name.png')}/>
                        <br/>
                        {this.props.currentChild.value.last_name}
                        <br/>
                            <br/>
                    <img className="signup_img" src={require('./images/age.png')}/>
                        <br/>
                        {this.props.currentChild.value.age}
                        <br/>
                            <br/>
                   
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


        </>      
    )}
}

 {/* <img src={require('./images/addchildpicbtn.svg')} width="450px"/> */}
export default withRouter(ChildProfile)