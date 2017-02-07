import React      from 'react';
import {connect}  from 'react-redux';
import uuid       from 'node-uuid';

import {addPaymentToUserAction} from '../../actions/actions';

var AddPayment = React.createClass({

    onAddPaymentToUser: function (e) {
        e.preventDefault();

        let {dispatch} = this.props;
        let {id} = this.props.selectedUser;

        let title = this.refs.title.value;
        let amount  = this.refs.amount.value;

        if(typeof title === 'string' && typeof parseInt(amount) === 'number'){
            if (title.length > 0 && parseInt(amount) > 0){

                this.refs.title.value = '';
                this.refs.amount.value = '';

                dispatch(addPaymentToUserAction(id,
                    {
                        id: uuid(),
                        title: title,
                        amount: amount,
                        date: new Date()
                    }
                ));
            }
        }


    },

    render: function () {
        return (
           <div>
               <form onSubmit={this.onAddPaymentToUser}>
                   <div>
                       <label>Title: </label> <input type="text" ref="title"/>
                       <label>Amount: </label> <input type="text" ref="amount"/>
                       <button>Add payment</button>
                   </div>
               </form>
           </div>
        )
    },

    mapStateToProps: function (state) {
        return { selectedUser: state.selectedUser }
    }
});

export default connect((state)=>{return state})(AddPayment);