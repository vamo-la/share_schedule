import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { emailChanged, passwordChanged, loginUser, signUpUser, logined } from '../actions/auth.js';
import firebase from '../config/firebase';

class LoginForm extends Component {
  onEmailandPasswordLogin = () => {
    // actionでログイン処理
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  };

  onEmailandPasswordSignUp = () => {
    // actionでサインアップ処理
    const { email, password } = this.props;
    this.props.signUpUser({ email, password });
  };

  onButtonPress = () => {
    // formtextでログインとサインアップを切り替え
    if (this.props.formText === 'ログイン') {
      this.onEmailandPasswordLogin();
    } else {
      this.onEmailandPasswordSignUp();
    }
  };

  onEmailChange = (email) => {
    // フォームにテキストが入力されたらreduxのstoreを更新
    this.props.emailChanged(email.target.value);
  };

  onPasswordChane = (password) => {
    // フォームにテキストが入力されたらreduxのstoreを更新
    this.props.passwordChanged(password.target.value);
  };

  googleLogin = () => {
    // Googleログイン処理
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  renderErrorMessage = () => {
    // エラーメッセージ
    const { error } = this.props;
    if (error === 'auth/user-not-found') {
      return 'ユーザー情報が登録されていません。';
    } else if (error === 'auth/wrong-password') {
      return 'パスワードが間違っています。';
    } else if (error === 'auth/invalid-email') {
      return 'メールアドレスが正しくありません。';
    } else if (error === 'auth/weak-password') {
      return 'パスワードは少なくとも6文字以上必要です。';
    } else if (error === 'auth/email-already-in-use') {
      return 'このメールアドレスは既に登録されています。';
    }
  };

  render() {
    return (
      <div>
        <GoogleLoginButton onClick={this.googleLogin} align="center" iconSize={'20'} size={'40'}>
          <span style={{ fontSize: 16 }}>Googleで{this.props.formText}</span>
        </GoogleLoginButton>
        <div style={{ textAlign: 'center', marginTop: 20 }}>または</div>
        <form style={{ textAlign: 'center' }} noValidate autoComplete="off">
          <div>
            <TextField
              id="standard-email"
              label="メールアドレス"
              value={this.props.email}
              onChange={this.onEmailChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="standard-password"
              label="パスワード"
              type="password"
              value={this.props.password}
              onChange={this.onPasswordChane}
              margin="normal"
            />
          </div>
          <div style={{ color: '#fa755a' }}>{this.renderErrorMessage()}</div>
          {this.props.loading ? (
            <CircularProgress style={{ marginTop: 5 }} />
          ) : (
            <Button style={{ margin: 20 }} onClick={this.onButtonPress} variant="contained" color="primary">
              {this.props.formText}
            </Button>
          )}
        </form>
      </div>
    );
  }
}

// prop-typesの定義
LoginForm.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  email: PropTypes.string,
  emailChanged: PropTypes.func,
  password: PropTypes.string,
  passwordChanged: PropTypes.func,
  formText: PropTypes.string,
  loginUser: PropTypes.func,
  signUpUser: PropTypes.func,
};

// Reduxと繋げる
const mapStateToProps = ({ auth }) => {
  return {
    email: auth.email,
    password: auth.password,
    error: auth.error,
    loading: auth.loading,
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
  logined,
  signUpUser,
})(LoginForm);
