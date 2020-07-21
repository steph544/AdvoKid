import React, {Component} from 'react'

  import { Link} from 'react-router-dom';
  import "./styles.css"
  import {ReactComponent as NavMapImage} from './images/navMapImage.svg';
  import { Slide, LightSpeed, Bounce, Rotate } from 'react-awesome-reveal';


class NavMap extends React.Component{

    render(){
      console.log(this.props.location.aboutProps.currentChild.value)
      return( 

      <Rotate triggerOnce>
         <div id="bg">
          
            <img src={require("./images/navMapImage.png")} usemap="#image-map"/>
            <map name="image-map">
                <Link to={{
                  pathname: "/levelone",
                  aboutProps:{
                      currentChild: this.props.location.aboutProps.currentChild.value
                  }}
                  }><area coords="655,1200,60" shape="circle"></area></Link>
                 <Link to={{
                  pathname: "/voice",
                  aboutProps:{
                      currentChild: this.props.location.aboutProps.currentChild.value
                  }}
                  }><area coords="1150,1072,1265,1182" shape="rect"></area></Link>
            </map>
        </div>
      </Rotate>
       
    )}
    
}

export default NavMap

