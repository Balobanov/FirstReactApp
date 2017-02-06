import React from 'react';
import { Link }   from 'react-router';

var NavBar = React.createClass({
    render: function () {
        return (
            <div>
                <h3>Navigation:  </h3>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/users">Users</Link></div>
                <div><Link to="/user-details">User Details</Link></div>
                <div><Link to="/about">About</Link></div>
            </div>
        )
    }
});

export default NavBar;