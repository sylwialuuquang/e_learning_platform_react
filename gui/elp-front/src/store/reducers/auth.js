import * as actionType from '../actions/actionTypes'
import { updateObject } from '../utility'


const InitialState = {
    token: localStorage.getItem("token"),
    user_id: null,
    user_first_name: localStorage.getItem("first_name"),
    groups: [],
    error: null,
    loading: false
}

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        user_id: action.user_id,
        user_first_name: action.user_first_name,
        groups: action.groups,
        error: null,
        loading: false
    })
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        user_id: null,
        user_first_name: null,
        groups: []
    })
}

const reducer = (state=InitialState, action) => {
    switch (action.type) {
        case actionType.AUTH_START: return authStart(state, action)
        case actionType.AUTH_SUCCESS: return authSuccess(state, action)
        case actionType.AUTH_FAIL: return authFail(state, action)
        case actionType.AUTH_LOGOUT: return authLogout(state, action)
        default:
            return state
    }
}

export default reducer;