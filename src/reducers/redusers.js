export var usersReduser = (state = [], action) => {
    switch (action.type){

        case 'ADD_USER':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    age: action.age,
                    payments: action.payments
                }
            ];

        case 'REMOVE_USER':
            return [
                ...state.filter(user => {
                    return user.id !== action.id;
                })
            ];
        default:
            return state;
    }
};

export var selectedUsersReduser = (state = {}, action) => {
    switch (action.type){

        case 'USER_WAS_SELECTED':
            return action.selectedUser;

        case 'USER_LOST_FOCUS':
            return action.selectedUser;

        default:
            return state;
    }
};
