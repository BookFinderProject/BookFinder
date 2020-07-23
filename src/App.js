// var firebase = require('firebase');
// var firebaseui = require('firebaseui');


import React from 'react';
import './App.css';
import Registration from './registration.js';
import Login from './login.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import App2 from './App2';

//main component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
      // state = { isSignedIn: false },
      // uiConfig = {
      //   signInFlow: "popup",
      //   signInOptions: [
      //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //     firebase.auth.GithubAuthProvider.PROVIDER_ID,
      //     firebase.auth.EmailAuthProvider.PROVIDER_ID
      //   ],
      //   callbacks: {
      //     signInSuccess: () => false
      //   }
      //   }
  }

  // firebase.initializeApp({
//   apiKey: "AIzaSyD12LvGcK23KrrdP1clagb8kcACa4DvJJ0",
//   authDomain: "finderbook-6c644.firebaseapp.com"
// })


 // componentDidMount = () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     this.setState({ isSignedIn: !!user })
  //     console.log("user", user)
  //   })
  // }


  //Authuntocation
  setUserAuth = (value) => this.setState({ isAuthenticated: true });
  //switch between login page & register page & App2 page
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route path='/auth/login'>
              <Login setUserAuth={this.setUserAuth} />
            </Route>
            <Route exact path='/auth/reg'>
              <Registration setUserAuth={this.setUserAuth} />
            </Route>

            <PrivateRoute isAuthenticated={this.state.isAuthenticated} path='/'>
              <App2 />
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    );
  }
}
//prevent user to enter main page without login or register
function PrivateRoute({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
