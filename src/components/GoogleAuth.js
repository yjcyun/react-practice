import React, { Component } from 'react'

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '479344963192-9d13lj6r65gm73cqqc31f3seherdh2po.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    });
  }
  // Update state without refresh
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }
  // Sign in functionality
  onSignInClick = () => {
    this.auth.signIn();
  }
  // Sign out functionality
  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.state.isSignedIn === 'null') {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button
          className='ui red google button'
          onClick={this.onSignOutClick}
        >
          <i className='google icon' />Sign Out
        </button>
      )
    } else {
      return (
        <button className='ui red google button'
          onClick={this.onSignInClick}
        >
          <i className='google icon' />Sign In with Google
        </button>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default GoogleAuth