import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom'
import App from './components/App';
import Jokes from './components/Jokes';
import { createBrowserHistory } from 'history';
import Header from './components/Header';
import MusicMaster from './projects/music-master';
import EvensOrOdds from './projects/evens-or-odds';
import Reaction from './projects/reaction';
import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path='/' render={() => <Header><App /></Header>} />
            <Route exact path='/jokes' render={() => <Header><Jokes /></Header>} />
            <Route exact path='/music-master' render={() => <Header><MusicMaster /></Header>} />
            <Route path='/evens-or-odds' render={() => <Header><EvensOrOdds /></Header>} />
            <Route path='/reaction' render={() => <Header><Reaction /></Header>} />
        </Switch>
    </Router>,
    document.getElementById('root')
);

