import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import rootSaga from './sagas';
import configureStore from './store';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './components/Home';
import Products from './containers/Products';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

const { store } = configureStore(
    window.__INITIAL_STATE__,
    rootSaga,
);

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/" component={Products} />
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
