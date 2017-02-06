import React            from 'react';
import {connect}        from 'react-redux';
import {addUserAction}  from './../../actions/actions';
import uuid             from 'node-uuid';

var UsersAdd = React.createClass({

    onAddNewUser: function(e){
        e.preventDefault();
        let {dispatch} = this.props;

        dispatch(addUserAction({
            id: uuid(),
            name: "Wad",
            age: 55,
            payments: []
        }));
    },

    render: function () {
        return (
            <div>
                <p>Add new User</p>
                <form onSubmit={this.onAddNewUser}>
                    <div>
                        <label>Name: </label><input type="text" ref="name"/>
                    </div>
                    <div>
                        <label>Age: </label><input type="text" ref="age"/>
                    </div>
                    <button>Save</button>
                </form>
            </div>
        )
    }
});

export default connect()(UsersAdd);