import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

const Routes = () => {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/dev/:id" component={Main} />
    </BrowserRouter>
  );
}

export default Routes;