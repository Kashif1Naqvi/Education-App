import React from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';

const AccountPage = ({ sessionStore }) =>
  <div className="container" style={{marginTop:"80px"}}>
    <h2><i>Account</i>:<small> {sessionStore.authUser.email}</small></h2>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  inject('sessionStore'),
  observer
)(AccountPage);