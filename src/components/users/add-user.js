import React            from 'react';
import {connect}        from 'react-redux';
import {startAddUserAction}  from './../../actions/actions';
import uuid             from 'node-uuid';

var UsersAdd = React.createClass({

    onAddNewUser: function(e){
        e.preventDefault();
        let {dispatch} = this.props;

        let name = this.refs.name.value;
        let age  = this.refs.age.value;

        if(typeof name === 'string' && typeof parseInt(age) === 'number'){
            if (name.length > 0 && parseInt(age) > 0){

                this.refs.name.value = '';
                this.refs.age.value = '';

                dispatch(startAddUserAction({
                    name: name,
                    age: age,
                    payments: [
                        {
                            title: 'test1',
                            amount: 20,
                            date: new Date()
                        },
                        {
                            title: 'test2',
                            amount: 30,
                            date: new Date()
                        }
                        ]
                }));
            }
        }
    },

    render: function () {
        return (
            <div>
                <h1>Add new user</h1>
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