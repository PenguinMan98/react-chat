import React from 'react';

class Logo extends React.Component{
  constructor(props){
    console.log('building Logo', props.appState);

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
    console.log('Logo saw a local state change', state);
    this.setState({
      loggedIn: state.loggedIn
    });
  }
  render() {
    console.log('rendering logo loggedIn?', this.state.loggedIn);
    if(this.state.loggedIn){
      return(
        <div className="container text-center">
        </div>
      );
    }
    return (
      <div className="container text-center">
        <img src="../img/NWRP_Logo_Scarlet.png" alt="New Worlds Roleplay" />
      </div>
    );
  }
};

export default Logo;
