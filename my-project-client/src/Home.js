import React from 'react'
import "./styles.css"
import {ReactComponent as LandingBg} from './images/landing_bg.svg';
import { NavLink, withRouter } from 'react-router-dom';

function Home(){
  

    return(
    <div class="center">
        <LandingBg style={{height: '100%'}} />
    </div>
       
    )
    
}


export default withRouter(Home)