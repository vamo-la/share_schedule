import firebase from '../config/firebase';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGN_UP_USER,
} from './AuthStatus';

////////////////////emailとpasswordでサインアップ、ログイン用/////////////////////////////
export const emailChanged = (text) => {
  // Eメールのテキストフォームの変更
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  // パスワードのテキストフォームの変更
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({ email, password }) => async (dispatch) => {
  // emailとpasswordでログインする
  // ログイン開始
  dispatch({
    type: LOGIN_USER,
  });

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      // ログイン成功、ユーザー情報を送る
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user,
      });
    })
    .catch((error) => {
      console.log(error);
      // ログイン失敗、エラーコードを送る
      dispatch({
        type: LOGIN_USER_FAIL,
        payload: error.code,
      });
    });
};

export const signUpUser = ({ email, password }) => async (dispatch) => {
  // emailとpasswordでサインアップする
  // サインアップ開始
  dispatch({
    type: SIGN_UP_USER,
  });

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // サインアップ成功、ユーザー情報を送る
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user,
      });
    })
    .catch((error) => {
      console.log(error);
      // サインアップ失敗、エラーコードを送る
      dispatch({
        type: LOGIN_USER_FAIL,
        payload: error.code,
      });
    });
};

////////////////////ログイン処理/////////////////////////////
// すでにログインしていた時の処理
export const logined = () => async (dispatch) => {
  const user = firebase.auth().currentUser;
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
};

export const logouted = () => {
  return {
    type: LOGIN_USER_FAIL,
    payload: null,
  };
};
