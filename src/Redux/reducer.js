import { loadData, saveData } from "../utils/localStorage"
import { ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, DELETE_TODO, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionTypes"


const initState = {
    getTodos : {
        todos: [],
        loading: false,
        error: false
    },
    addTodos: {
        todo:{},
        loading:false,
        error:false
    },
    Total: loadData('allTotal') || 0,
    
}


export const TodoReducer =(state = initState, {type, payload})=> {

    switch(type)
    {
        case GET_TODO_REQUEST:{

            return {
                ...state,
                getTodos:{
                    ...state.getTodos,
                    loading: true,
                    error: false

                } 
            }
        }

        case GET_TODO_SUCCESS:{
            let newTotal=payload.length;
            saveData('allTotal',newTotal)
            return {
                ...state,
                getTodos:{
                    ...state.getTodos,
                    todos:payload,
                    loading: true,
                    error: false

                },
                Total: newTotal
                
            }
        }

        case GET_TODO_FAILURE:{

            return {
                ...state,
                getTodos:{
                    ...state.getTodos,
                    loading: true,
                    error: false

                } 
                
            }
        }

        case ADD_TODO_REQUEST:{

            return{
                ...state,
                addTodos: {
                    ...state.addTodos,
                    todo:{},
                    loading:true,
                    error:false
                }

            }
        }

        case ADD_TODO_SUCCESS:{

            return {
                ...state,
                addTodos:{
                    ...state.addTodos,
                    todo:payload,
                    loading:false,
                    error:false
                },
                getTodos: {
                    ...state.getTodos,
                    todos: [...state.getTodos.todos, payload]
                },
                

            }
        }

        case ADD_TODO_FAILURE:{

            return {
                ...state,
                addTodos:{
                    ...state.addTodos,
                    loading:false,
                    error:true
                }
            }
        }

        case DELETE_TODO:{
            var newTodo= state.getTodos.todos.filter(item=> item.id!=payload)
            return {
                ...state,
                getTodos: {
                    ...state.getTodos,
                    todos:newTodo
                }
            }
        }

        default:{
            return state
        }
    }
}