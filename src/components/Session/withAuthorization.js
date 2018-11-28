import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';

import { firebase } from '../../firebase';
import * as routes from '../../constants/routes';

const withAuthorization = (condition) => (Data) => {
  class WithAuthorization extends Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }
      });
    }

    render() {
      return this.props.sessionStore.authUser ? <Data {...this.props} /> : null;
    }
  }

  return compose(
    withRouter,
    inject('sessionStore'),
    observer
  )(WithAuthorization);
}

export default withAuthorization;