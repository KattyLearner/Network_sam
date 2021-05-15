import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {StateType} from "../../App";
import {AddPostActionType, UpdateNewMessageBodyType, UpdateNewPostValueType, UpdateSendMessageType} from "./Store";


type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>
export type StoreType = typeof store


let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer
})

let store = createStore(reducers)

export default store
