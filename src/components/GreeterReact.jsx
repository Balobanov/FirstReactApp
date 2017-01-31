import React from 'react';
import GreeterForm from './GreeterForm';
import GreeterMessage from './GreeterMessage';

var GreeterReact = React.createClass({
    getDefaultProps: function(){
        return {
            name: "User",
            text: "Text"
        };
    },

    getInitialState: function(){
        return {
            name: this.props.name,
            text: this.props.text
        };
    },

    onSubmitFormHandler: function (updates) {
        this.setState({
            name: updates.name,
            text: updates.text
        });
    },

    render: function () {
        return (
            <div>
            <GreeterMessage name={this.state.name} text={this.state.text}/>
            <GreeterForm onNewNameHandler={this.onSubmitFormHandler}/>
        </div>
        );
    }
});

export default GreeterReact;