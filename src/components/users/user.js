import React              from 'react';
import {connect}          from 'react-redux';
import {hashHistory} from 'react-router';


import {removeUserAction, selectUserAction} from './../../actions/actions';


var User = React.createClass({

    onDeleteUser: function() {
      let {id} = this.props.user;
      let {dispatch} = this.props;

      dispatch(removeUserAction(id));
    },

    onClickHandler: function(){
        let {dispatch} = this.props;
        dispatch(selectUserAction(this.props.user));
        hashHistory.push('/user-details');
    },

    render: function () {
        var {name, age} = this.props.user;
        return (
            <div onClick={this.onClickHandler}>
                <label>{name} {age}  </label>
                <button onClick={this.onDeleteUser}>X</button>
            </div>
        )
    }
});

export default connect()(User);