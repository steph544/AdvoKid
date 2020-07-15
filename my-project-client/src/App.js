import React from 'react';
// import Form from './Form.js'
// import NavBar from './NavBar.js'
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


class App extends React.Component {
  
  state = {
    loggedIn: true 
  }
  
  render(){

    return (
  
    <div class="bg-img">
      {console.log("hello")}
        <LogIn/> 
    </div>
    

       
    )
  }
}

export default App;



