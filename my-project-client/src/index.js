import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
<<<<<<< HEAD

=======
>>>>>>> Stephanie
import Login from './Login.js'
import Voice from './Voice.js'
import {PhraseLevel} from './Phrase_Level.js'
import SignUp from "./SignUp.js"
<<<<<<< HEAD
import Home from "./Home.js"


import { createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducers/userReducer';
import NavMap from './NavMap';

const store = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
      <Router>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
=======
// import Home from "./Home.js"
import LevelOne from "./LevelOne.js"
// import userReducer from './reducers/userReducer';
import NavMap from './NavMap';
import Parents from './parents.js'
import Webcam from "./WebCam.js"
import Response from "./response.js"
import TreasureBox from "./TreasureBox.js"

ReactDOM.render(
   
      <Router>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={App} />
>>>>>>> Stephanie
          <Route exact path="/navMap" component={NavMap} />
          <Route exact path="/voice" component={Voice}/>
          <Route exact path="/phrase" component={PhraseLevel}/>
          <Route exact path="/signup" component={SignUp}/>
<<<<<<< HEAD
      </Router>
    </Provider>,
=======
          <Route exact path="/levelone" component={LevelOne}/>
          <Route exact path="/parents" component={Parents} render={(props) => <Parents renderSwitch = {this.renderSwitch} />}/>
          <Route exact path="/webcam" component={Webcam}/>
          <Route exact path="/response" component={Response}/>
          <Route exact path="/treasurebox" component={TreasureBox}/>
      </Router>,
>>>>>>> Stephanie

  document.getElementById('root')
);

