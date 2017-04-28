import React from 'react';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { blue600, grey900 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import rootSaga from './sagas';
import configureStore from './store';
import './App.css';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Products from './containers/Products';
import Product from './containers/Product';

const { store } = configureStore(
  window.__INITIAL_STATE__,
  rootSaga,
);

const history = createBrowserHistory();

const muiTheme = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: blue600,
  },
  drawer: {
    width: 230,
    color: grey900,
  },
  raisedButton: {
    primaryColor: blue600,
  },
});

// Inject tap event to Material-UI
injectTapEventPlugin();

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={history}>
        <div className="App">
          <div className="App-header">
            <Home />
          </div>
          <div className="App-intro">
            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/products/:lotId" component={Product} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
