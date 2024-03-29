import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import store from './app/store';

import Home from './app/containers/Home';
import Add from './app/containers/Add';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


ReactDOM.render((
    <Provider store={store}> 
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/add" component={Add} />
                </Switch>
            </App>
        </Router>
    </Provider> 

    ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
