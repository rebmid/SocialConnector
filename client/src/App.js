import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register'
import {Provider} from 'react-redux';
import './App.css';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser}
from './actions/authActions';

if(localStorage.jwtToken){
  setAuthToken (localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
      <Navbar />
      <Route exact path="/" component={Landing} />
      <div className="container">
       <Route exact path="/register" component={Register} />
       <Route exact path="/login" component={Login} />
       </div>
      <Footer />
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
