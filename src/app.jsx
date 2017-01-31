import React from 'react';
import ReactDOM from 'react-dom';
import GreeterReact from './components/GreeterReact';

var App = React.createClass({
    render: ()=>{
        return(
            <GreeterReact/>
        );
    }
});

// var Router = require('react-router').Router
// var Route = require('react-router').Route
// var Link = require('react-router').Link
// var browserHistory = require('react-router').BrowserHistory;
//
// <Router history={browserHistory}>
//     <Route path="/" component={App}>
//         <Route path="about" component={About}/>
//         <Route path="*" component={App}/>
//     </Route>
// </Router>

ReactDOM.render(<App/>, document.getElementById('app'));
