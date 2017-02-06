import React            from 'react'
import ReactDOM         from 'react-dom'
import {Provider}       from 'react-redux';
import { Router,
         Route,
         hashHistory,
         IndexRoute }   from 'react-router'

import Home             from './components/home/home'
import Main             from './components/main/main'
import About            from './components/about/about'
import UsersList        from './components/users/users-list'
import User             from './components/users/user'
import UserDetails      from './components/users/user-details';
import store            from './store/store'

store.subscribe(()=>{
    console.log("Redux store.");
    console.log(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <Route path="about" component={About}/>
                <Route path="users" component={UsersList}/>
                <Route path="user-details" component={UserDetails}/>
                <IndexRoute component={Home}/>
            </Route>
        </Router>
    </Provider>
,document.getElementById('app'));
