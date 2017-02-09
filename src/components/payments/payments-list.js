import React      from 'react';
import {connect}  from 'react-redux';

import Payment    from '../payments/payment';
import AddPayment from '../payments/add-payment';

var PaymentList = React.createClass({

    renderPayments: function () {
        let {id, payments} = this.props.selectedUser;

        if(payments)
        if(payments.length > 0){
            return payments.map((payment)=>{
                return (
                    <li key={payment.id}><Payment payment={payment} userId={id}></Payment></li>
                );
            });
        }
        else {
            return (<div>no payments</div>);
        }
    },

    render: function () {
        return (
            <div>
                <ul>
                    {this.renderPayments()}
                </ul>
                <AddPayment/>
            </div>
        )
    },

    mapStateToProps: function (state) {
        return { selectedUser: state.selectedUser }
    }
});

export default connect((state)=>{return state})(PaymentList);