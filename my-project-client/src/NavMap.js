import React from 'react'
import { Link} from 'react-router-dom';
import "./styles.css"
import { Rotate } from 'react-awesome-reveal';


class NavMap extends React.Component{

    render(){
      return( 

      <Rotate triggerOnce>
         <div id="parent_page">
          <div className="div1">
            <img width="100%" height='105%' src={require("./images/navMapImage2.png")} usemap="#image-map"/>
            <map name="image-map">
                <Link to={{
                  pathname: "/levelone",
                  aboutProps:{
                      currentChild: this.props.location.aboutProps.currentChild
                  }}
                  }><area coords="655,1200,60" shape="circle"></area></Link>
                 <Link to={{
                  pathname: "/Voice",
                  aboutProps:{
                      currentChild: this.props.location.aboutProps.currentChild
                  }}
                  }><area coords="1150,1072,1265,1182" shape="rect"></area></Link>
                  <Link to={{
                  pathname: "/parents",
                  aboutProps:{
                      currentChild: this.props.location.aboutProps.currentChild
                  }}
                  }><area coords="89,1087,299,1250" shape="rect"></area></Link>
                  <Link to={{
                  pathname: "/treasurebox",
                  aboutProps:{
                      currentChild: this.props.location.aboutProps.currentChild
                  }}
                  }>
                  <area target="" alt="" title="" href="" coords="2213,45,2470,246" shape="rect"></area></Link>
            </map>
          </div>
            
        </div>
      </Rotate>
       
    )}
    
}

export default NavMap

