export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const LOGGED_IN = 'Logged in';
export const LOGGED_OUT = 'Logged out';


export function loginRequest(payload) {
  return {
    type: LOGIN_REQUEST,
    payload
  };
}
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}
export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error
  };
}
export function logoutRequest() {
  return {
    type: LOGOUT_REQUEST,
  };
}
export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}
export function logoutFailure(error) {
  return {
    type: LOGOUT_FAILURE,
    error
  };
}