import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGN_UP_USER,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  // ロード中か
  loading: false,
  // ログインしているか
  isLoggedIn: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // Eメール変更
      return {
        ...state,
        email: action.payload,
      };
    case PASSWORD_CHANGED:
      // パスワード変更
      return {
        ...state,
        password: action.payload,
      };
    case LOGIN_USER:
      // ログイン処理開始、ロード中にする
      return {
        ...state,
        loading: true,
        error: '',
      };
    case SIGN_UP_USER:
      // サインアップ処理開始、ロード中にする
      return {
        ...state,
        loading: true,
        error: '',
      };
    case LOGIN_USER_SUCCESS:
      // ログイン成功、ロード修了、ユーザー情報取得、ログイン状態にする
      return {
        ...state,
        loading: false,
        password: '',
        user: action.payload,
        isLoggedIn: true,
      };
    case LOGIN_USER_FAIL:
      // ログイン失敗、ロード修了、ログアウト状態にする
      return {
        ...state,
        error: action.payload,
        loading: false,
        password: '',
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
