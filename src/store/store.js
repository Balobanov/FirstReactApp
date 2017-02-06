var    redux        =    require('redux');
import {usersReduser, selectedUsersReduser} from './../reducers/redusers';

var configure = (initialState = {}) => {

    var reducer = redux.combineReducers({
        users: usersReduser,
        selectedUser: selectedUsersReduser
    });

    var _store = redux.createStore(reducer, initialState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return _store;
};

var store = configure();

export default store;