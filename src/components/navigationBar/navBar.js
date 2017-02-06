import React from 'react';
import { Link }   from 'react-router';

var NavBar = React.createClass({
    render: function () {
        return (
            <div>
                <h3>Navigation:  </h3>


                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <div className="navbar-brand"><Link to="/">Home</Link></div>
                            <div className="navbar-brand"><Link to="/users">Users</Link></div>
                            <div className="navbar-brand"><Link to="/user-details">User Details</Link></div>
                            <div className="navbar-brand"><Link to="/about">About</Link></div>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
});

export default NavBar;