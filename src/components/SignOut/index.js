import React from 'react';

import { auth } from '../../firebase';

const SignOutButton = () =>
  <div  className="nav-item"  >
  <button
   
    type="button"
    onClick={auth.doSignOut}
    className="nav-link"
    style={{backgroundColor:"black" ,  padding:"8px" , marginLeft:"30px" }}
  >
    Sign Out
  </button>
  </div>
 

export default SignOutButton;
