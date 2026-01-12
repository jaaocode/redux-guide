import userActionTypes from "./actionTypes"

export const loginUser = (payload) => ({
    type: userActionTypes.LOGIN,
    payload
});

export const logoutUser = (payload) => ({
    type: userActionTypes.LOGOUT,
    payload
});