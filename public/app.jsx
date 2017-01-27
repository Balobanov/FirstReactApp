// import React from 'react'
// import { Router, Route, Link, browserHistory } from 'react-router'

var GreeterMessage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hello {this.props.name}!!!</h1>
                <p>{this.props.text}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({

    onSubmitForm: function (event) {
        event.preventDefault();

        let updates = {};

        let name = this.refs.name.value;
        let text = this.refs.text.value;

        this.refs.name.value = '';
        this.refs.text.value = '';

        if (name.length > 0){
            updates.name = name
        }

        if(text.length > 3) {
            updates.text = text;
        }

        this.props.onNewNameHandler(updates);
    },

    render: function (props) {
        return (
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <input type="text" ref="name"/> <br/>
                    <textarea ref="text"></textarea>
                    <button>Set</button>
                </form>
            </div>
        );
    }
});

var GreeterReact = React.createClass({
    getDefaultProps: function(){
      return {
          name: "User",
          text: "Text"
      };
    },

    getInitialState: function(){
        return {
            name: this.props.name,
            text: this.props.text
        };
    },

    onSubmitFormHandler: function (updates) {
        this.setState({
            name: updates.name,
            text: updates.text
          });
    },

    render: function () {
        return (
        <div>
            <GreeterMessage name={this.state.name} text={this.state.text}/>
            <GreeterForm onNewNameHandler={this.onSubmitFormHandler}/>
        </div>
        );
    }
});

var About = React.createClass({
    render: function () {
        return (
            <div>
                <h1>About page</h1>
            </div>
        );
    }
});

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
