import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx'
import { Provider } from 'react-redux'

function RouteManager({ store }) {
  return (
    <Provider store={store}>
      <Router>
          <Route path="/:filter?" component={Home} />
      </Router>
    </Provider>
  );
}

export default RouteManager;