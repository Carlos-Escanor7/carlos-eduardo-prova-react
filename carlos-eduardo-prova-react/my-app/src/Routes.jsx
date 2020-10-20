import React from 'react';
import { Router, Route, Redirect, hashHistory} from 'react-router';
import Block from './pages/blocks';
import Card from './pages/cards';
import Form from './pages/forms';
import Index from './pages/index';
import Pricing from './pages/pricing';



export default props => (
    <Router history={hashHistory}>
        <Route path='/blocks' component={Block}/>
        <Route path='/cards' component={Card}/>
        <Route path='/forms' component={Form}/>
        <Route path='/index' component={Index}/>
        <Route path='/pricing' component={Pricing}/>

        <Redirect from='*' to='/blocks' />
    </Router>
)
