import React                         from 'react';
import {connect}                     from 'react-redux';

import {removePaymentFromUserAction} from '../../actions/actions';

var Payment = React.createClass({

    onRemovePayment: function () {
        let {userId, payment, dispatch} = this.props;

        dispatch(removePaymentFromUserAction(userId, payment.id));
    },

    render: function () {
        let {userId, payment} = this.props;
        return (
            <div>
                <div><label>Id: {payment.id}</label></div>
                <div><label>Title: {payment.title}</label></div>
                <div><label>Amount: {payment.amount}</label></div>
                {/*<div><label>Date: {payment.date.toLocaleTimeString()}</label></div>*/}
                <button onClick={this.onRemovePayment}>X</button>
            </div>
        )
    }
});

export default connect()(Payment);