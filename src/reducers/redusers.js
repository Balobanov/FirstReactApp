import * as ACTIONS from '../actions/actionHelper';

export var usersReduser = (state = [], action) => {
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

        case ACTIONS.ADD_SET_OF_USER:
            return [
                ...state,
                ...action.users
            ];

        case ACTIONS.REMOVE_USER:
            return [
                ...state.filter(user => {
                    return user.id !== action.id;
                })
            ];

        case ACTIONS.ADD_PAYMENT:
            state.forEach((user)=>{
                if(user.id === action.userId){
                    user.payments.push(action.payment);
                }
            })
            return [
                ...state
            ]

        case ACTIONS.REMOVE_PAYMENT:
            state.forEach((user)=>{
                if(user.id === action.userId){
                    user.payments = user.payments.filter((payment)=>{
                        return payment.id !== action.paymentId;
                    });
                }
            })
            return [
                ...state
            ]

        case ACTIONS.LOGOUT:
            return [];

        default:
            return state;
    }
};

export var selectedUsersReduser = (state = false, action) => {
    switch (action.type){

        case ACTIONS.USER_WAS_SELECTED:
            return action.selectedUser;

        case ACTIONS.USER_LOST_FOCUS:
            return action.selectedUser;

        default:
            return state;
    }
};

export var authReducer = (state = {}, action) => {
    switch (action.type){

        case ACTIONS.LOGIN:
            return {
                uid: action.uid,
                accessToken: action.accessToken
            };

        case ACTIONS.LOGOUT:
            return {};

        default:
            return state;
    }
};
