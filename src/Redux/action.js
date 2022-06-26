import axios from 'axios';
import { ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, DELETE_TODO, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from './actionTypes';


export const getTodo = ()=>(dispatch)=> {
    dispatch({type:GET_TODO_REQUEST })
    axios.get(`http://localhost:8080/todos`)
    .then(r=> {
        dispatch({type: GET_TODO_SUCCESS, payload:r.data})
    })
    .catch((err)=> {
        dispatch({type: GET_TODO_FAILURE})
    })
}


export const addTodo =(newTodo)=>(dispatch)=> {
    dispatch({type:ADD_TODO_REQUEST})
    axios.post(`http://localhost:8080/todos`,newTodo)
    .then(r=> {
        dispatch({type:ADD_TODO_SUCCESS, payload: r.data})
        // console.log(r.data)
    })
    .catch((err)=> {
        dispatch({type: ADD_TODO_FAILURE})
    })
}

export const deleteTodo =(id)=>(dispatch)=> {
    axios.delete(`http://localhost:8080/todos/${id}`)
    .then(r=> {
        dispatch({type:DELETE_TODO,payload: id})
    })
}