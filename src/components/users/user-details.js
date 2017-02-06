import React              from 'react';
import {connect}          from 'react-redux';

import {removeUserAction} from './../../actions/actions';

var UserDetails = React.createClass({

    render: function () {
        return (
            <h1>USER DITAILS</h1>
        )
    }
});

export default connect()(UserDetails);