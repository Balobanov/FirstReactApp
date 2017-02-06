import React              from 'react';
import {connect}          from 'react-redux';
import {hashHistory} from 'react-router';

import {lostFocusUserAction} from './../../actions/actions';

var UserDetails = React.createClass({

    render: function () {

        if(!this.props.selectedUser) {
            return (
                <div>
                    <h1>You have not chosen user yet.</h1>
                    <button onClick={()=>{hashHistory.goBack();}}>go Back</button>
                </div>
            )
        }
        else{
            return (
                <div>
                    <h1>USER DITAILS</h1>
                    <div><label>{this.props.selectedUser.name}</label></div>
                    <div><label>{this.props.selectedUser.age}</label></div>
                    <button onClick={this.onGoBackHandler}>go Back</button>
                </div>
            )
        }
    },

    onGoBackHandler: function () {
        let {dispatch} = this.props;
        dispatch(lostFocusUserAction());
        hashHistory.goBack();
    },

    mapStateToProps: function (state) {
        return { selectedUser: state.selectedUser }
    }
});

export default connect((state)=>{return state})(UserDetails);