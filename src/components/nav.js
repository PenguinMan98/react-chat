import React from 'react';

class Nav extends React.Component{
  constructor(props){
    console.log('building Nav', props.appState);

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
    console.log('Nav saw a local state change', state);
    this.setState({
      loggedIn: state.loggedIn
    });
  }
  render() {
    var loggedIn = this.state.loggedIn;
    console.log('rendering Nav', loggedIn);

    var nav = (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>,
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>,
            <a className="navbar-brand" href="#">New Worlds RP</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            {this.leftNav()}
            /* if logged in*/
            <form className="navbar-form navbar-right">
              <div className="form-group">
                Character:
                <select className="form-control" placeholder="Choose a character">
                  <option value="1">Char 1</option>
                  <option value="2">Char 2</option>
                  <option value="3">Char 3</option>
                  <option value="4">Char 4</option>
                </select>
              </div>
            </form>
            /* else */
            <ul className="nav navbar-nav navbar-right">
              <li className="navbar-right"><a id="login-button" href="#login" onClick={this.handleLogIn.bind(this)}>Log In</a></li>
            </ul>
            /* -- */
          </div>
        </div>
      </nav>
    );
    return nav;
  }
  handleLogIn(){
    this.props.appState.put({loginShowForm: true});
  }
  leftNav(){
    return (
      <ul className="nav navbar-nav">
        {this.getNavLink("#", 'Home')}
        {this.getNavLink("#games", 'Games')}
        {this.getNavLink("#contact", 'Contact')}
        {this.getNavLink("#chat", 'Chat')}
        {this.state.loggedIn ? this.getNavLink("#logout", 'Log Out'): ''}
      </ul>);
  }
  getNavLink(route, linkText){
    const activeClass = this.state.active === route ? 'active' : '';
    return (
       <li className={activeClass}><a href={route}>{linkText}</a></li>
    );
  }
}

export default Nav;
