/**
 * 用户登录Reducers
 */
'use strict';
import types from '../ActionType/ActionTypes';

const initialState = {
    role : 0,
    loginStatus: false
}

export default function login(state = initialState, action){
    switch (action.type) {
      case types.LOGIN_STATUS_CHANGE:
          return Object.assign({}, state, {
              role: action.role,
              loginStatus:action.loginStatus
          });
      default:
          return state;
    }
}
