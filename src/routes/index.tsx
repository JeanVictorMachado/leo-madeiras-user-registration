import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Registration from '../pages/Registration';
import ListUsers from '../pages/ListUsers';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Registration} />
        <Route exact path="/list-users/:id" component={ListUsers} />
        <Route exact path="/edit-user/:id" component={Registration} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
