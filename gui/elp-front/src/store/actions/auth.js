import axios from 'axios'
import * as actionTypes from './actionTypes'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, user_id, user_first_name) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        user_id: user_id,
        user_first_name: user_first_name
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('first_name')
    localStorage.removeItem('expirationDate')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationDate) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationDate * 1000)
    }
}

export const authLogin = (username, password) => {
    return (dispatch) => {
        dispatch(authStart())
        axios.post('http://127.0.0.1:8000/api/accounts/token-auth/', {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.token
            const user_id = res.data.user_id
            const user_first_name = res.data.user_first_name
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
            localStorage.setItem('token', token)
            localStorage.setItem('first_name', user_first_name)
            localStorage.setItem('expirationDate', expirationDate)
            dispatch(authSuccess(token, user_id, user_first_name))
            dispatch(checkAuthTimeout(3600))
        })
        .catch(error => {
            dispatch(authFail(error))
        })
    }
}