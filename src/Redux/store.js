
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { TodoReducer } from "./reducer";
import thunk from 'redux-thunk'
import { authReducer } from "./auth/auth.reducer";


const rootreducer=combineReducers({
    todoApp : TodoReducer,
    auth: authReducer
})

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk))