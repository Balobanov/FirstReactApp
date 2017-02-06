import React      from 'react';
import {connect}  from 'react-redux';

import Payment from '../payments/payment';

var PaymentList = React.createClass({

    renderPayments: function () {
        let payments = this.props;

        if(payments){
            return payments.map((payment)=>{
                return (
                    <li key={payment.id}><Payment payment={payment}></Payment></li>
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
            </div>
        )
    }
});

export default connect()(PaymentList);