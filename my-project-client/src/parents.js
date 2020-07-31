import React from 'react'
import "./styles.css"
import Progress from "./Progress.js"
import ChildSignUp from './ChildSignUp.js'
import Levels from "./Levels.js"
import Prizes from "./Prizes.js"
import { Slide} from 'react-awesome-reveal';
import ChildProfile from "./ChildProfile.js"


class Parents extends React.Component{
    state={
        users: null, 
        childInfo: null,
        currentUser: null,
        currentChild: null
    }

    selectChild=(value)=>{
        this.setState({
             currentChild: value, 
        })
    }

    componentDidMount(){ 
   
        fetch("http://localhost:3000/api/v1/users",
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
              users: data,
              currentUser:  data.find(user => user.username===localStorage.user)
            }) 
            localStorage.setItem('currentUser', JSON.stringify(data.find(user => user.username===localStorage.user))) 
        })
    }  
 

    changeComp = (e) => {
        e.preventDefault();
        this.setState({
            childInfo: "profile"
        })
    }
    changeComp2 = (e) => {
        e.preventDefault();
        this.setState({
            childInfo: "progress"
        })
    }
    
    changeComp3 = (e) => {
        e.preventDefault();
        this.setState({
            childInfo: "levels"
        })
    }

    changeComp4 = (e) => {
        e.preventDefault();
        this.setState({
            childInfo: "prizes"
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    renderSwitch=(param)=>{
        switch(param){
        case null:
          return <ChildSignUp selectChild={this.selectChild} currentChild={this.state.currentChild} users={this.state.users} currentUser={this.state.currentUser} />
        case 'progress':
            return <Progress currentUser={this.state.currentUser} currentChild={this.state.currentChild}/>
        case 'levels':
            return <Levels currentUser={this.state.currentUser} currentChild={this.state.currentChild}/>
        case 'prizes':
            return <Prizes currentUser={this.state.currentUser} currentChild={this.state.currentChild}/>
        case 'profile':
            return <ChildProfile selectChild={this.selectChild} currentChild={this.state.currentChild} currentUser={this.state.currentUser} />
        default: 
        return <ChildProfile selectChild={this.selectChild} currentChild={this.state.currentChild} users={this.state.users} currentUser={this.state.currentUser} />
        }
    }

    render(){
        // if (this.props.location.aboutProps !== undefined){
        //     this.state.currentChild= this.props.location.aboutProps.currentChild
        // }
        localStorage.setItem('currentChild', JSON.stringify(this.state.currentChild))
        if (this.state.currentUser !== null){
            return( 
                        <Slide>
                            <div className="parent_page parents-bg-img parents_page">
                                <div className="div1"> 
                                    <img width="100%" height="100%" alt=""  src="./assets/images/parents_tabs.png" useMap="#image-map" hidefocus="true"/> 

                                    <map name="image-map">
                                        <area target="" alt="Child" title="Child" href="" coords="288,36,710,213" shape="rect" onClick={(e)=> this.changeComp(e)}></area>
                                        <area target="" alt="Progress" title="Progress" href="" coords="755,58,1190,208,952,148,1479,112" shape="rect" onClick={(e)=> this.changeComp2(e)}></area>
                                        <area target="" alt="Levels" title="Levels" href="" coords="1219,51,1618,204,1394,94,1836,123" shape="rect" onClick={(e)=> this.changeComp3(e)}></area>
                                        <area target="" alt="Prizes" title="Prizes" href="" coords="1660,50,2078,202,452,77,1878,126" shape="rect" onClick={(e)=> this.changeComp4(e)}></area>
                                    </map>
                                </div>
                            {this.renderSwitch(this.state.childInfo)}
                            </div>     
                        </Slide>    
                )
        } else {
            return ""
        }
        
}
}


export default Parents