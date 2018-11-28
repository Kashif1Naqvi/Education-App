import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import './index.css';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';
const Navigation = ({ sessionStore }) =>
  <div>
    { sessionStore.authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>




const NavigationAuth = () =>
    <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top text-muted">
      <h1 className="navbar-brand" >Edu App</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" href="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar" >
      <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to={routes.HOME}>Home</Link></li>
          <li className="nav-item" ><Link className="nav-link" to={routes.LANDING} >Case Studies</Link></li>
          <li className="nav-item"><Link className="nav-link" to={routes.EDUCATION}>Education</Link></li>
          <li className="nav-item"><Link className="nav-link" to={routes.CONTACT}>Contact</Link></li>
          <li className="nav-item"><Link className="nav-link" to={routes.ACCOUNT}>Account</Link></li>
          <li className="nav navbar-nav navbar-right">
            <SignOutButton className="glyphicon glyphicon-user" />
          </li>
       </ul>
      </div>
    </nav> 
    
const NavigationNonAuth = () =>
     <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top text-muted">
     <h1 className="navbar-brand" >Edu App</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="collapsibleNavbar" >
          <ul className="navbar-nav">
          <li className="nav-item" ><Link className="nav-link" to={routes.LANDING}>Case Studies</Link></li>
          <li className="nav-item" ><Link className="nav-link" to={routes.SIGN_IN}>Sign In</Link></li>
          </ul>
      </div>
      </nav>
export default compose(
  inject('sessionStore'),
  observer
)(Navigation);
