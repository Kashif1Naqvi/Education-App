
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyCpuwMR2FNk79rmG5ngsjJRxiDEvyY5uNA",
  authDomain: "authentication-88960.firebaseapp.com",
  databaseURL: "https://authentication-88960.firebaseio.com",
  projectId: "authentication-88960",
  storageBucket: '',
  messagingSenderId:"976559648766",
};

const devConfig = {
  apiKey: "AIzaSyCpuwMR2FNk79rmG5ngsjJRxiDEvyY5uNA",
  authDomain:  "authentication-88960.firebaseapp.com",
  databaseURL: "https://authentication-88960.firebaseio.com",
  projectId: "https://authentication-88960.firebaseio.com",
  storageBucket: '',
  messagingSenderId: "976559648766",
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

// const prodConfig = {
//   apiKey: "AIzaSyCpuwMR2FNk79rmG5ngsjJRxiDEvyY5uNA",
//   authDomain: "authentication-88960.firebaseapp.com",
//   databaseURL: "https://authentication-88960.firebaseio.com",
//   projectId: "authentication-88960",
//   storageBucket: "authentication-88960.appspot.com",
//   messagingSenderId: "976559648766"
// };


// var devConfig = {
//   apiKey: "AIzaSyCpuwMR2FNk79rmG5ngsjJRxiDEvyY5uNA",
//   authDomain: "authentication-88960.firebaseapp.com",
//   databaseURL: "https://authentication-88960.firebaseio.com",
//   projectId: "https://authentication-88960.firebaseio.com",
//   storageBucket: "authentication-88960.appspot.com",
//   messagingSenderId: "976559648766"
// };

// const config = process.env.NODE_ENV === 'production'
//   ? prodConfig
//   : devConfig;

// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }

// const db = firebase.database();
// const auth = firebase.auth();

// export {
//   db,
//   auth,
// };
