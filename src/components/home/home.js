import React from 'react';
import {connect}  from 'react-redux';

import logo from './../../style/logo.svg';

var Home = React.createClass({

    onClickHandler: function(){
        this.props.router.push('/users');
    },

    render: function () {
        return (
            <div>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Welcome to React</h2>
                    </div>
                    <p className="App-intro">
                        <button onClick={this.onClickHandler}>Get Started</button>
                    </p>
                </div>


            </div>
        )
    }
});

export default connect()(Home);



