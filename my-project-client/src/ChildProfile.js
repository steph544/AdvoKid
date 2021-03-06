import React from 'react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import { Dropdown, Grid} from 'semantic-ui-react'
import ChildSignUp from "./ChildSignUp.js"




class ChildProfile extends React.Component{
    state={
        childPicture: "../assets/images/childplaceholder.png",
        options: [],
        loading: false,
        selectedChild: this.props.currentChild, 
    }

    selectChild = (e, { value }) =>  (
        this.props.selectChild({ value }.value), 
        this.setState({ 
            childPicture: {value}.value.image, 
            selectedChild: {value}.value  
        })
    )

    componentDidMount(){ 
        if(this.props.currentUser.children && this.props.currentChild !== null){
            let array = this.props.currentUser.children.map((child, index) => ({key: index, text: child.first_name, value: child}))
            this.setState({
                options: array, 
                childPicture: this.props.currentChild.image 
            })
        }
        else {
            this.setState({
                options: [{key: "No Current Children", text: "No Current Children", value: "No Current Children"}]
        })
    }}


     updateChildPicture=()=>{
         if (this.state.currentPicture !== null){
           fetch(`http://localhost:3000/children/${this.state.selectedChild.id}`,
        {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            id: this.state.selectedChild.id,
            image: this.state.childPicture  
        })
        })
        .then(res => res.json())
        .then(child=> console.log(child) ) 
         }

    }

    logout=()=>{
        localStorage.clear()
    }

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
        }), 
        setTimeout(this.updateChildPicture(), 3000)
        )
       }

    render(){
      
        const { value } = this.state
        const { image } = this.state

        if (this.props.currentChild !== null){
        return(
            <>
                <>        
                <div class="div2 image-upload">
                    <label for="file-input"> 
                        <img className="avatar" src={this.state.childPicture} alt="" width="400px" height="400px"/>
                            <br/>
                        <img src={require('./images/addchildpicbtn.svg')} alt="" width="450px"/> 
                    </label>      
                        <br/> 
                    <input  id="file-input" type="file" name="image" onChange={(e) => this.uploadImage(e)} value={image}/>
                        <br/>
                </div>

                <div class="div8 child-font"> 
                <Grid columns={2}>
                    <Grid.Column >
                    <Dropdown
                        style={{width: '450px'}}
                        onChange={this.selectChild}
                        options={this.state.options}
                        placeholder='Choose Child'
                        selection
                        value={value}
                    />
                    </Grid.Column>
                </Grid>
                <br/>
                <br/> 
                    <img className="signup_img" alt="" src={require('./images/first_name.png')}/>
                            <br/> 
                                <br/>
                        {this.props.currentChild.first_name}
                            <br/>
                                <br/>
                                    <br/> 
                        <img className="signup_img" alt="" src={require('./images/last_name.png')}/>
                            <br/> 
                                <br/>
                            {this.props.currentChild.last_name}
                            <br/>
                                <br/>
                                    <br/> 
                        <img className="signup_img" alt="" src={require('./images/age.png')}/>
                            <br/> 
                                <br/>
                            {this.props.currentChild.age}
                            <br/>
                                <br/>
                                    <br/> 
                    
                </div>

                <div className="div4">
                    <img width="90%" height="80%" alt="" src={require("./images/dog.png")}/> 
                    <br/>
                       
                    <NavLink to={{
                        pathname: "/navMap",
                        aboutProps:{
                            currentChild: this.props.currentChild,
                            renderSwitch: this.props.renderSwitch  
                        }
                    }}>
                        <img src={require('./images/letsplaybtn.png')} alt="" width="450px"/>
                    </NavLink> 

                    <NavLink to={{
                        pathname: "/",
                    }}>
                        <img width="450px" onClick={this.logout} alt="" src={require('./images/logout.png')}/>
                    </NavLink>
                </div>
                </>
            </>      
        )} else {
            return <ChildSignUp selectChild={this.props.selectChild} currentChild={this.props.currentChild} users={this.props.users} currentUser={this.props.currentUser}/>
        }
        }
          
}

 {/* <img src={require('./images/addchildpicbtn.svg')} width="450px"/> */}
export default ChildProfile