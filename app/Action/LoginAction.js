/**
 * 用户登录Action操
 */
'use strict';

import types from '../actiontype/ActionTypes';

export function changeLogin(role,loginStatus){
     return dispatch => {
        dispatch({
            type: types.LOGIN_STATUS_CHANGE,
            role,
            loginStatus
        });
     }
}
