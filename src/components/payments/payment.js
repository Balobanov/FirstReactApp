import React              from 'react';
import {connect}          from 'react-redux';
// import {hashHistory} from 'react-router';
// import {removeUserAction, selectUserAction} from './../../actions/actions';


var Payment = React.createClass({

    render: function () {
        let pay = this.props.pay;
        return (
            <div>
                <div><label>{pay.title}</label></div>
                <div><label>{pay.amount}</label></div>
                <div><label>{pay.date}</label></div>
            </div>
        )
    }
});

export default connect()(Payment);