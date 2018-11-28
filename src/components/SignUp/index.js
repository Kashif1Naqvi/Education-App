 import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';

const SignUpPage = ({ history }) =>
  <div style={{marginTop:"80px"}} >
    <h1>SignUp</h1>
    <SignUpForm history={history} />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    console.log("hello world",this.props.history)
    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
          console.log("hello",authUser);
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            this.props.history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName('this', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '' || username === '' || email === '';

    return (
      <form style={{marginTop:"80px"}} className="text-muted"  onSubmit={this.onSubmit}>
        <div className="form-group">
        <input
          value={username}
          onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
          type="text"
          placeholder="Full Name"
          className="form-control"
        />
        </div>
        <div className="form-group">
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
          className="form-control"
        />
        </div>
        <div className="form-group">
        <input
          value={passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
          className="form-control"
        />
        </div>
        <div className="form-group">
        <input
          value={passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
          className="form-control"
        />
        </div>
        <button disabled={isInvalid} type="submit" className="btn btn-default" >
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () =>
  <p className="text-info">
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP} className="btn btn-success">Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};