import React from 'react';
import NavBar from './../navigationBar/navBar';

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar/>
                {this.props.children}
            </div>
        )
    }
});

export default Main;


