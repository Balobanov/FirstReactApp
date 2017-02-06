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
export var selectUserAction = () => {
    return {
        type: USER_WAS_SELECTED,
        isSelected: true
    };
};

export var lostFocusUserAction = () => {
    return {
        type: USER_WAS_SELECTED,
        isSelected: false
    };
};