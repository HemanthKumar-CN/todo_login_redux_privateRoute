import axios from "axios"
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./auth.types"

export const loginAuth=(email,password)=>(dispatch)=>{
    axios.post(`https://reqres.in/api/login`, {
        email: email,
        password:password, 
    })
    .then((r)=> {
        dispatch({type:LOGIN_SUCCESS, payload:r.data})
        // console.log(r.data)

    })
    .catch((err)=> {
        dispatch({type:LOGIN_FAILURE, payload:err.response.data})
        // console.log(err.response.data)
    })
}


export const logout =()=> ({type:LOGOUT})