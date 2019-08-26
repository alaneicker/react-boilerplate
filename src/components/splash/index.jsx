import React from 'react';
import { connect } from 'react-redux';
import { updateSplash } from './splash.actions';

export const Splash = (props) => {
  const { splashTitle, splashSubtitle } = props;

  return (
    <div className="splash-page">
      <div className="splash-page__content">
        <img src="/assets/images/launch.svg" alt="image of a rocket" />
        <h1>{splashTitle}</h1>
        <h2>{splashSubtitle}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = ({ splashReducer }) => {
  const { splashTitle, splashSubtitle } = splashReducer;

  return {
    splashTitle,
    splashSubtitle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateSplash(payload) {
      dispatch(updateSplash(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);