import React from 'react';
import NavBar from './../navigationBar/navBar';

var Main = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div>
                    <NavBar/>
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export default Main;


