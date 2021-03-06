import React from 'react';
import './App.css';
import SearchBooks from './search.js';
import Falist from './favare';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

//switch between search page & favorite page and read later page
class App2 extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isAuthenticated: false,
    };
  }
  setUserAuth = (value) => this.setState({ isAuthenticated: value });
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route path='/auth/Search'>
            <SearchBooks handleSort={this.handleSort} handleSubmit={this.handleSubmit}  setUserAuth={this.setUserAuth} id='s' />
            </Route>
            <Route exact path='/auth/Fav'>
              <Falist setUserAuth={this.setUserAuth} />
            </Route>        
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App2;
