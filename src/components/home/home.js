import React from 'react';
import {connect}  from 'react-redux';

var Home = React.createClass({

    onClickHandler: function(){
        this.props.router.push('/users');
    },

    render: function () {
        return (
            <div>
                <h1>Home page</h1>
                <button onClick={this.onClickHandler}>Users</button>
            </div>
        )
    }
});

export default connect()(Home);



