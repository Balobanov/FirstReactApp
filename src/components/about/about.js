import React from 'react';
import logo from './../../style/logo.svg';

var About = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Its your first SPA application powered by ReactJs</h1>
                <h3>IT-Climb. (C) 2017. Balobanov Denis</h3> <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
});

export default About;