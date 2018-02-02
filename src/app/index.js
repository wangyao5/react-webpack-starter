import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './configureStore'
import Login from './pages/login'
import Bundle from './utils/bundle'

import welcomePage from 'bundle-loader?lazy&name=[path][name]!./pages/welcome'
const Welcome = () => (
  <Bundle load={welcomePage}>
      {(Welcome) => <Welcome />}
  </Bundle>
)

const supportsHistory = 'pushState' in window.history
ReactDOM.render(
  <Provider store={store}>
    <Router forceRefresh={!supportsHistory}>
        <div>
            <Link to="/home">主页</Link>
            <Link to="/welcome">欢迎页</Link>
            <Route exact path="/home" component={Login}/>
            <Route path="/welcome" component={Welcome}/>
        </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);