import React, {Component} from 'react'

  import { NavLink, withRouter } from 'react-router-dom';
  import "./styles.css"
  import {ReactComponent as NavMapImage} from './images/navMapImage.svg';
  import { Slide, LightSpeed, Bounce, Rotate } from 'react-awesome-reveal';


function NavMap(){
  

    return(
      <Rotate triggerOnce>
         <div className="bg-img">
             <NavMapImage />
        </div>
      </Rotate>
       
    )
    
}


export default withRouter(NavMap)