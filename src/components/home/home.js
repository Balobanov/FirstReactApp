import React from 'react';
import {connect}  from 'react-redux';

var Home = React.createClass({

    onClickHandler: function(){
        this.props.router.push('/users');
    },

    render: function () {
        return (
            <div>
                <div className="App">
                    <div className="App-header">
                        {/*<img src={logo} className="App-logo" alt="logo" />*/}
                        <h2>Welcome to React</h2>
                    </div>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>

                <button onClick={this.onClickHandler}>Users</button>
            </div>
        )
    }
});

export default connect()(Home);



