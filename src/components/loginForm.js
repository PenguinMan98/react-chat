import React from 'react';

class LoginForm extends React.Component{
  constructor(props){
    console.log('building LoginForm', props.appState);

    /*Default Component State*/
    super(props);
    this.state = {
      loggedIn: false
    }
  }
  componentDidMount(){
    /*Listen for State Changes*/
    this.props.appState.on(this.appStateUpdate.bind(this));
  }
  appStateUpdate(state){
    console.log('LoginForm saw a local state change', state);
    this.setState({
      loggedIn: state.loggedIn,
      loginShowForm: state.loginShowForm
    });
  }
  render() {
    console.log('rendering loginForm loggedIn?', this.state.loggedIn);
    console.log('rendering loginForm loginShowForm?', this.state.loginShowForm);
    return(
      <div id="login-form" className="row" className={this.state.loginShowForm ? '' : 'hidden'}>
        <div className="col-sm-4 col-sm-offset-4">
          <label htmlFor="login-username">Username</label><input type="text" id="login-username" name="login-username" /><br />
          <label htmlFor="login-password">Password</label><input type="password" id="login-password" name="login-password" /><br />
          <button>Log In</button>
        </div>
      </div>
    );
  }
};

export default LoginForm;
