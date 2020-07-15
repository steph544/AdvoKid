import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Login.js'
import Voice from './Voice.js'
import {PhraseLevel} from './Phrase_Level.js'
import SignUp from "./SignUp.js"
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
          <Route exact path="/navMap" component={NavMap} />
          <Route exact path="/voice" component={Voice}/>
          <Route exact path="/phrase" component={PhraseLevel}/>
          <Route exact path="/signup" component={SignUp}/>
      </Router>
    </Provider>,

  document.getElementById('root')
);

