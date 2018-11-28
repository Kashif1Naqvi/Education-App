import React,{Component} from 'react';
import { inject } from 'mobx-react';

import { firebase } from '../../firebase';

const withAuthentication = (Data) => {
  class WithAuthentication extends Component {
    componentDidMount() {
      const { sessionStore } = this.props;

      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? sessionStore.setAuthUser(authUser): sessionStore.setAuthUser(null);
      });
    }

    render() {
      return (
        <Data {...this.props} />
      );
    }
  }

  return inject('sessionStore')(WithAuthentication);
}

export default withAuthentication;