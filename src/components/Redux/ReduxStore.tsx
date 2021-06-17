import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-Reducer";
import thunkMiddleware from 'redux-thunk'



// type ReducersType = typeof reducers
// export type AppStateType = ReturnType<ReducersType>
// export type StoreType = typeof store

export type AppStateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    users: usersReducer,
    auth: authReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store

export default store
