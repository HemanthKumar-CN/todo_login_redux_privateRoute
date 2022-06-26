import { loadData, saveData } from "../../utils/localStorage"
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./auth.types"

const initState={
    loading:false,
    error:false,
    isAuth: loadData('token') ? true : false,
    token: loadData('token') || null,
    msg:''
}


export const authReducer = (state=initState, {type,payload}) => {
     
    switch(type) {

        case LOGIN_SUCCESS:{
            saveData('token',payload.token)
            return {
                ...state,
                loading:false,
                error:false,
                isAuth:true,
                token:payload.token
            }
        }

        case LOGIN_FAILURE:{
            
            return{
                ...state,
                loading:false,
                error:true,
                isAuth:false,
                msg:payload.error

            }
        }

        case LOGOUT:{
            localStorage.removeItem('token')
            return{
                ...state,
                loading:false,
                error:false,
                isAuth:false
            }
        }

        default:{
            return state;
        }
    }
}