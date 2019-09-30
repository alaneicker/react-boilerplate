import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Splash from '../splash';

const App = () => {
  return (
    <Fragment>
      <Route path="/" exact component={Splash} />
    </Fragment>
  );
};

export default App;
