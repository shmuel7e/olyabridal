import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  loadUsers,
  removeUser,
  login,
  logout,
  signup
} from '../actions/UserActions';

class Signup extends Component {
  state = {
    msg: '',
    signupCred: {
      email: '',
      password: '',
      username: ''
    }
  };



  signupHandleChange = ev => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      signupCred: {
        ...prevState.signupCred,
        [name]: value
      }
    }));
  };


  doSignup = async ev => {
    ev.preventDefault();
    const { email, password, username } = this.state.signupCred;
    if (!email || !password || !username) {
      return this.setState({ msg: 'All inputs are required!' });
    }
    const signupCreds = { email, password, username };
    this.props.signup(signupCreds);
    this.setState({ signupCred: { email: '', password: '', username: '' } });
  };

 
  render() {
    let signupSection = (
      <form onSubmit={this.doSignup}>
        <input
          type="text"
          name="email"
          value={this.state.signupCred.email}
          onChange={this.signupHandleChange}
          placeholder="Email"
        />
        <br />
        <input
          name="password"
          type="password"
          value={this.state.signupCred.password}
          onChange={this.signupHandleChange}
          placeholder="Password"
        />
        <br />
        <input
          type="text"
          name="username"
          value={this.state.signupCred.username}
          onChange={this.signupHandleChange}
          placeholder="Username"
        />
        <br />
        <button>Signup</button>
      </form>
    );
    const { loggedInUser } = this.props;
    return (
      <div>
        <h2>{this.state.msg}</h2>
        {loggedInUser && (
          <div>
            <h2>Welcome: {loggedInUser.username} </h2>
            <button onClick={this.props.logout}>Logout</button>
          </div>
        )}
        {!loggedInUser && signupSection}
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.user.users,
    loggedInUser: state.user.loggedInUser,
    isLoading: state.system.isLoading
  };
};
const mapDispatchToProps = {
  login,
  logout,
  signup,
  removeUser,
  loadUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
