import React from 'react';
// import Form from './Form.js'
// import NavBar from './NavBar.js'
<<<<<<< HEAD
import LogIn from './Login.js'
import './styles.css'
import {
  Button,
  Form,
  Grid,
  Message,
  Segment,
} from 'semantic-ui-react';
// import Form from './Form.js'

=======
import './styles.css'
// import Form from './Form.js'

import Home from "./Home.js"
>>>>>>> Stephanie

class App extends React.Component {
  
  state = {
<<<<<<< HEAD
    loggedIn: true 
  }
  
=======
    loggedIn: true,
    view: null  
  }

>>>>>>> Stephanie
  render(){

    return (
  
    <div class="bg-img">
<<<<<<< HEAD
        <LogIn/> 
=======
        <Home/>
>>>>>>> Stephanie
    </div>
    

       
    )
  }
}

export default App;



