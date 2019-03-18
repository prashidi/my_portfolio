import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom'
import App from './components/App';
import Jokes from './components/Jokes';
import { createBrowserHistory } from 'history';
import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/jokes' component={Jokes} />
        </Switch>
    </Router>,
    document.getElementById('root')
);

