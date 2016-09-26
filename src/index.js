import React from 'react';
import ReactDOM from 'react-dom';
import Gun from 'gun/gun';
var gun = new Gun();
var appState = gun.get('appState');

import Logo from './components/logo';
import Nav from './components/nav';
import LoginForm from './components/loginForm';

/*App State defaults*/
appState.put({
  loggedIn: false,
  loginShowForm: false
});

ReactDOM.render(
  <div>
    <Logo appState={appState} />
    <div className="clearfix" />
    <Nav appState={appState} />
    <div className="clearfix" />
    <LoginForm appState={appState} />
    <div className="clearfix" />

    <div>
      <div id="chatMessages">
        <ul>
          <li>
            This is a chat post
          </li>
          <li>
            This is a chat post
          </li>
          <li>
            This is a chat post
          </li>
          <li>
            This is a chat post
          </li>
        </ul>
      </div>
      <div id="input">
        <input type="text" id="chat_input"></input>
      </div>
    </div>
  </div>
  , document.querySelector('.container'));
