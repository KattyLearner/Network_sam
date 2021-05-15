import React, {ChangeEvent} from 'react';
import DialogItem, {DialogPropType} from './DialogItem/DialogItem';
import Message from './Message/Message';
import {UpdateNewMessageBodyType, UpdateSendMessageType} from "../Redux/Store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogsReducer";
import {StoreType} from "../Redux/ReduxStore";
import {StateType} from "../../App";
import Dialogs from "./Dialogs";


type DialogsContainerPropsType = {
    store: StoreType
}



export type MessageDataType = {
    id: number
    message: string
}

const DialogsContainer = (props: DialogsContainerPropsType) =>{

    let state = props.store.getState()

    let sendMessageClick = ()=>{
        props.store.dispatch(sendMessageCreator())
    }

    let newMessageChange = (newBody: string) =>{
        props.store.dispatch(updateNewMessageBodyCreator(newBody))
    }


    return (<Dialogs sendMessageClick={sendMessageClick} newMessageChange={newMessageChange} state={state} />)
}
 export default DialogsContainer