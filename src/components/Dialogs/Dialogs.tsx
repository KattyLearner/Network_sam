import React from 'react';
import DialogItem, {DialogPropType} from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


type DialogsPropsType = {
    dialogsData: DialogPropType[]
    messageData: MessageDataType[]
}


export type MessageDataType = {
    id: number
    message: string
}

const Dialogs = (props: DialogsPropsType) =>{

    let dialogsElements = props.dialogsData.map( (dialog)=> <DialogItem name={dialog.name} id={dialog.id}/> )
    let messageElements = props.messageData.map((message)=> <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
             </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
 export default Dialogs