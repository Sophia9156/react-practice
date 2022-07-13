import * as actionTypes from './actions';

const initiaState = {
  error: null,
  isLoggingIn: null,
  token: null
};

export default function login(state = initiaState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: null,
        error: null
      };  
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: true,
        error: null,
        token: action
      }
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case actionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        error: null
      }
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        error: null
      }
    case actionTypes.LOGOUT_FAILURE:
      return {
        ...state,
        error: action.error
      }   
    default:
      return state;
  }
}