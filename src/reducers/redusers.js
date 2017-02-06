import * as ACTIONS from '../actions/actionHelper';

export var usersReduser = (state = [], action) => {
    // console.log(state);
    // console.log(action);

    switch (action.type){

        case ACTIONS.ADD_USER:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    age: action.age,
                    payments: action.payments
                }
            ];

        case ACTIONS.REMOVE_USER:
            return [
                ...state.filter(user => {
                    return user.id !== action.id;
                })
            ];

        // case 'ADD_PAYMENT':
        //     return ;
        //
        // case 'REMOVE_PAYMENT':
        //     return ;

        default:
            return state;
    }
};

export var selectedUsersReduser = (state = {}, action) => {
    switch (action.type){

        case ACTIONS.USER_WAS_SELECTED:
            return action.selectedUser;

        case ACTIONS.USER_LOST_FOCUS:
            return action.selectedUser;

        default:
            return state;
    }
};
