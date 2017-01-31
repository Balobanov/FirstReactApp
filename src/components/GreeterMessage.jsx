import React from 'react';
var GreeterMessage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hello {this.props.name}!!!</h1>
                <p>{this.props.text}</p>
            </div>
        );
    }
});

export default GreeterMessage;