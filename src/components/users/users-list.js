import React      from 'react';
import {connect}  from 'react-redux';

import Data       from '../../mockData/mock-data';
import User       from './user'
import UserAdd    from './add-user';

var UsersList = React.createClass({

    onAddNewUser: function(e){
        e.preventDefault();
    },


    renderUsers: function () {
        let {users} = this.props;

        if(users.length > 0){
            return users.map((user)=>{
                return (
                    <User key={user.id} user={user}/>
                );
            });
        }
        else {
            return <p>No users</p>
        }
    },

    render: function () {
        return (
            <div>
                <h2>Render list of users</h2>
                {this.renderUsers()}
                <div>
                    <UserAdd/>
                </div>
            </div>
        )
    }
});

export default connect(
    (state) => {
        return state;
    })(UsersList);