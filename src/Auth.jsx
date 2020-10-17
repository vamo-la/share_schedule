import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Auth extends Component {
  renderContent = () => {
    if (this.props.isLoggedIn) {
      // ログインしていたら子コンポーネントを表示する
      return this.props.children;
    } else {
      // ログインしてないならリダイレクト
      return <Redirect to={'/'} />;
    }
  };
  render() {
    return <Fragment>{this.renderContent()}</Fragment>;
  }
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

// prop-typesの定義
Auth.propTypes = {
  isLoggedIn: PropTypes.object,
  children: PropTypes.object,
};

export default connect(mapStateToProps)(Auth);
