import React, {ChangeEvent} from 'react';
import DialogItem, {DialogPropType} from './DialogItem/DialogItem';
import Message from './Message/Message';
import {UpdateNewMessageBodyType, UpdateSendMessageType} from "../Redux/Store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogsReducer";
import {AppStateType, StoreType} from "../Redux/ReduxStore";
import {MessagePageType, ProfilePageType, StateType} from "../../App";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";



export type MessageDataType = {
    id: number
    message: string
}

// const DialogsContainer = (props: DialogsContainerPropsType) =>{
//
//     let state = props.store.getState()
//
//     let sendMessageClick = ()=>{
//         props.store.dispatch(sendMessageCreator())
//     }
//
//     let newMessageChange = (newBody: string) =>{
//         props.store.dispatch(updateNewMessageBodyCreator(newBody))
//     }
//
//
//     return (<Dialogs sendMessageClick={sendMessageClick} newMessageChange={newMessageChange} state={state} />)
// }
type MapStateToPropsType = {
    messagePage: MessagePageType
}

type MapDispatchToPropsType = {
    newMessageChange: (newBody: string) => void
    sendMessageClick: () => void
}


let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        messagePage: state.messagePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        newMessageChange: (newBody) => {dispatch(updateNewMessageBodyCreator(newBody))},
        sendMessageClick: () => {dispatch(sendMessageCreator())}

    }
}
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer