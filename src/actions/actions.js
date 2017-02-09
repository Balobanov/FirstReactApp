import * as ACTIONS from '../actions/actionHelper';
import firebase, {googleAuthProvider, githubAuthProvider, firebaseRef} from '../firebase/firebase';
import {hashHistory}   from 'react-router';


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

export var startAddUserAction = (userObj) => {
    return (dispatch, getState) => {

        var uid = getState().auth.uid;
        var userRef = firebaseRef.child(`users/${uid}/users`).push(userObj);

        return userRef.then(() => {
            dispatch(addUserAction({
                ...userObj,
                id: userRef.key
            }));
        });
    };
};

export var startAddSetOfUsers = () => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;

        var usersRef = firebaseRef.child(`users/${uid}/users`);

        return usersRef.once('value').then((snapshot) => {
            var users = snapshot.val() || {};

            console.log(users);
            var parsedUsers = [];

            Object.keys(users).forEach((usersId) => {
                let payments = [];
                for(let key in users[usersId].payments) {
                  payments.push({
                      id: key,
                      ...users[usersId].payments[key]
                  });

                }
                  console.log(payments);

                parsedUsers.push({
                    id: usersId,
                    ...users[usersId],
                    payments: payments
                });
            });

            console.log(users);
            dispatch(addSetOfUsersAction(parsedUsers));
        });
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

//
// Auth actions
//
export var login = (uid, accessToken) => {
    return {
        type: ACTIONS.LOGIN,
        uid,
        accessToken
    };
};

export var logout = () => {
    return {
        type: ACTIONS.LOGOUT
    };
};

export var startLoginWithGoogleAction = () =>{
    return (dispatch, getSate)=>{
        return firebase.auth().signInWithPopup(googleAuthProvider).then(function(result) {
            let token = result.credential.accessToken;
            let uid = result.user.uid;

            dispatch(login(uid, token));
            hashHistory.push('users');
        });
    };
}


export var startLoginWithGitHubAction = () =>{
    return (dispatch, getSate)=>{
        return firebase.auth().signInWithPopup(githubAuthProvider).then(function(result) {
            let token = result.credential.accessToken;
            let uid = result.user.uid;

            dispatch(login(uid, token));
            hashHistory.push('users');
        });
    };
}

export var startLoginWithEmailAndPassword = (email, password) =>{
    return (dispatch, getSate)=>{
        return firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
            let token = result.refreshToken;
            let uid = result.uid;

            dispatch(login(uid, token));
            hashHistory.push('users');
        });
    };
}

export var startLogoutAction = () =>{
    return (dispatch, getSate)=>{
        return firebase.auth().signOut().then(function() {
            dispatch(logout());
            hashHistory.push('/');
        });
    };
}