import React, {ChangeEvent} from 'react';
import DialogItem, {DialogPropType} from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import {MessagePageType} from "../../App";
import { Redirect } from 'react-router-dom';



export type DialogsPropsType = {
    messagePage: MessagePageType,
    sendMessageClick: () => void
    newMessageChange: (newBody: string) => void
    isAuth: boolean
}

export type MessageDataType = {
    id: number
    message: string
}

const Dialogs = (props: DialogsPropsType) =>{

    let state = props.messagePage

    let dialogsElements = state.dialogsData.map( (dialog)=> <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/> )
    let messageElements = state.messageData.map((message)=> <Message key={message.id} message={message.message}/>)
    let newMessageBody = props.messagePage.newMessageBody

    let onSendMessageClick = ()=>{
        props.sendMessageClick()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        let newBody= e.currentTarget.value
        props.newMessageChange(newBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

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