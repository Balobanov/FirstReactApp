//
// User's actions
//
export var addUserAction = (userObj) => {
    return {
        type: 'ADD_USER',
        ...userObj
    };
};

export var removeUserAction = (id) => {
    return {
        type: 'REMOVE_USER',
        id
    };
};

//
// User select actions
//
export var selectUserAction = (userObj) => {
    return {
        type: 'USER_WAS_SELECTED',
        selectedUser: {...userObj }
    };
};

export var lostFocusUserAction = () => {
    return {
        type: 'USER_LOST_FOCUS',
        selectedUser: null
    };
};