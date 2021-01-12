import React from 'react';
// import Form from './Form.js'
// import NavBar from './NavBar.js'
import './styles.css'
// import Form from './Form.js'

import Home from "./Home.js"

class App extends React.Component {
  
  state = {
    loggedIn: true,
    view: null  
  }

  render(){

    return (
  
    <div class="bg-img">
        <Home/>
    </div>
    

       
    )
  }
}

export default App;

