import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function LandingPage(props) {
  if (props.isLoggedIn) {
    return <Redirect to={'/logined'} />;
  } else {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

export default connect(mapStateToProps)(LandingPage);
