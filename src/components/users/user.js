import React              from 'react';
import {connect}          from 'react-redux';
import {hashHistory} from 'react-router';


import {removeUserAction} from './../../actions/actions';


var User = React.createClass({

    onDeleteUser: function() {
      let {id} = this.props.user;
      let {dispatch} = this.props;

      dispatch(removeUserAction(id));
    },

    onClickHandler: function(){
        hashHistory.push('/user-details');
    },

    render: function () {
        var {name, age} = this.props.user;
        return (
            <div >
                <label>{name} {age}  </label>
                <button onClick={this.onDeleteUser}>X</button>
                <button onClick={this.onClickHandler}>Details</button>
            </div>
        )
    }
});

export default connect()(User);