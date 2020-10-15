import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(Auth);
