import { combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";



// type ReducersType = typeof reducers
// export type AppStateType = ReturnType<ReducersType>
// export type StoreType = typeof store

export type AppStateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer
})

let store = createStore(rootReducer)

export default store
