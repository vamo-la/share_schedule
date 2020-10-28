import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import history from './history';

function Auth() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isSignUp = useSelector((state) => state.auth.isSignUp);

  // プロフィール登録画面へ遷移
  const handleToProfileRegistPage = () => {
    history.push('/profile-regist');
  };

  // ログイン後画面へ遷移
  const handleToLoggedInPage = () => {
    history.push('/loggedin');
  };

  const renderContent = () => {
    if (isSignUp) {
      // サインアップの場合はプロフィール登録へと遷移
      return handleToProfileRegistPage;
    } else if (isLoggedIn) {
      // ログインしていたら子コンポーネントを表示する
      return handleToLoggedInPage;
    } else {
      // ログインしてないならリダイレクト
      return <Redirect to={'/'} />;
    }
  };

  return <Fragment>{renderContent()}</Fragment>;
}

export default Auth;
