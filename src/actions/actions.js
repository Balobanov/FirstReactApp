import * as ACTIONS from '../actions/actionHelper';
//
// User's actions
//
export var addUserAction = (userObj) => {
    return {
        type: ACTIONS.ADD_USER,
        ...userObj
    };
};

export var removeUserAction = (id) => {
    return {
        type: ACTIONS.REMOVE_USER,
        id
    };
};

export var addSetOfUsersAction = (users) => {
    return {
        type: ACTIONS.ADD_SET_OF_USER,
        users
    };
};

//
// User select actions
//
export var selectUserAction = (selectedUser) => {
    return {
        type: ACTIONS.USER_WAS_SELECTED,
        selectedUser
    };
};

export var lostFocusUserAction = () => {
    return {
        type: ACTIONS.USER_LOST_FOCUS,
        selectedUser: false
    };
};

//
// Payments actions
//
export var addPaymentToUserAction = (userId, payment) => {
    return {
        type: ACTIONS.ADD_PAYMENT,
        userId,
        payment
    };
};

export var removePaymentFromUserAction = (userId, paymentId) => {
    return {
        type: ACTIONS.REMOVE_PAYMENT,
        userId,
        paymentId
    };
};
