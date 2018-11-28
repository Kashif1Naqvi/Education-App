import React from 'react';

import { auth } from '../../firebase';

const SignOutButton = () =>
   <div  className="nav-item text-muted" >
  <button
       className="btn btn-secondary "
    type="button"

    onClick={auth.doSignOut}
  >
 
    Sign Out
  </button>
  </div>
  

export default SignOutButton;
