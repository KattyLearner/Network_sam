import React, {ChangeEvent} from 'react';
import DialogItem, {DialogPropType} from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import {UpdateNewMessageBodyType, UpdateSendMessageType} from "../Redux/Store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogsReducer";
import {StoreType} from "../Redux/ReduxStore";
import {MessagePageType} from "../../App";



export type DialogsPropsType = {
    messagePage: MessagePageType,
    sendMessageClick: () => void
    newMessageChange: (newBody: string) => void
}

export type MessageDataType = {
    id: number
    message: string
}

const Dialogs = (props: DialogsPropsType) =>{

    let state = props.messagePage

    let dialogsElements = state.dialogsData.map( (dialog)=> <DialogItem name={dialog.name} id={dialog.id}/> )
    let messageElements = state.messageData.map((message)=> <Message message={message.message}/>)
    let newMessageBody = props.messagePage.newMessageBody

    let onSendMessageClick = ()=>{
        props.sendMessageClick()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        let newBody= e.currentTarget.value
        props.newMessageChange(newBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
             </div>
            <div className={s.messages}>
               <div>{messageElements}</div>
                <div>
                    <div> <textarea placeholder={'Enter your message.. '}
                                    onChange={onNewMessageChange}
                                    value={newMessageBody}></textarea> </div>
                    <div> <button onClick={onSendMessageClick}>sent</button></div>
                </div>
        </div>
        </div>
    )
}
 export default Dialogs