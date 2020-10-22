import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function LandingPage() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn) {
    return <Redirect to={'/logined'} />;
  } else {
    return <div style={{ position: 'absolute', top: 150, left: 150 }}>ここにページの概要を記入</div>;
  }
}

export default LandingPage;
