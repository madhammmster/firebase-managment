import {database, auth}from '../firebase/firebase';
import {
    GET_INVITE_FULFILLED, GET_INVITE_REJECTED, GET_INVITE_REQUESTED, SIGN_IN_SUCCESS,
    SIGN_OUT_SUCCESS
} from "../constants";
import {performRequest} from "./appActions";

export const onAuthStateChanged = () => {
    return  (dispatch) => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                dispatch(signInSuccess(user));
            } else {
                dispatch(signOutSuccess());
            }
        });
    }
};

export const signInWithEmailAndPassword = (email, password) => {
    return dispatch => {
        dispatch(performRequest());
        auth.signInWithEmailAndPassword(email, password).catch(function (error) {
            console.log(error)
        });
    }
};

export const signInSuccess = (user) => {
    return {
        type: SIGN_IN_SUCCESS,
        payload: user
    }
};

export const signOut = () => {
    return dispatch => {
        dispatch(performRequest());
        auth.signOut()
    }
}


export const signOutSuccess = () => {
    return {
        type: SIGN_OUT_SUCCESS
    }
};



export function getInvite() {
    return dispatch => {
        dispatch(getInviteRequestedAction());
        return database.ref('/').once('value', snap => {
            const invite = snap.val();
            dispatch(getInviteFulfilledAction(invite))
        })
            .catch((error) => {
                console.log(error);
                dispatch(getInviteRejectedAction());
            });
    }
}

function getInviteRequestedAction() {
    return {
        type: GET_INVITE_REQUESTED
    };
}

function getInviteRejectedAction() {
    return {
        type: GET_INVITE_REJECTED
    }
}

function getInviteFulfilledAction(invite) {
    return {
        type: GET_INVITE_FULFILLED,
        invite
    };
}