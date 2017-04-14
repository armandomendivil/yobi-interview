import React from 'react';
import Home from './Home';
import Test from './Test';

const Root = () => (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
    </Router>
);

export default Root;
