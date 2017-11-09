import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, Switch } from 'react-router';
import {
  HashRouter,
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import RouteConfig from './Router/Route';



// This demo uses a HashRouter instead of BrowserRouter
// because there is no server to match URLs
ReactDOM.render((
  <HashRouter>
    <RouteConfig />
  </HashRouter>
), document.getElementById('root'))