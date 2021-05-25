import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogsReducer";
import {AppStateType} from "../Redux/ReduxStore";
import {MessagePageType} from "../../App";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";



// export type MessageDataType = {
//     id: number
//     message: string
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