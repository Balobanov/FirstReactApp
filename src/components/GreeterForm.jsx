import React from 'react';
var GreeterForm = React.createClass({

    onSubmitForm: function (event) {
        event.preventDefault();

        let updates = {};

        let name = this.refs.name.value;
        let text = this.refs.text.value;

        this.refs.name.value = '';
        this.refs.text.value = '';

        if (name.length > 0){
            updates.name = name
        }

        if(text.length > 3) {
            updates.text = text;
        }

        this.props.onNewNameHandler(updates);
    },

    render: function (props) {
        return (
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <input type="text" ref="name"/> <br/>
                    <textarea ref="text"></textarea>
                    <button>Set</button>
                </form>
            </div>
        );
    }
});

export default GreeterForm;
