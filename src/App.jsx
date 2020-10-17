import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from './config/firebase';

import { logined, logouted } from './actions';
import history from './history';
import LandingPage from './components/LandingPage';
import LoginedPage from './components/LoginedPage';
import NavBar from './components/NavBar';
import Auth from './Auth';
import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // ログイン処理
        this.props.logined();
        console.log('loginしました');
      } else {
        // ログアウト処理
        this.props.logouted();
      }
    });
  }
  render() {
    return (
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Auth>
            <Route path="/logined" exact component={LoginedPage} />
          </Auth>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

// prop-typesの定義
App.propTypes = {
  logined: PropTypes.func,
  logouted: PropTypes.func,
};

export default connect(mapStateToProps, { logined, logouted })(App);
