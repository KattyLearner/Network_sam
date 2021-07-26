import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogsReducer";
import {AppStateType} from "../Redux/ReduxStore";
import {MessagePageType} from "../../App";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../HOC/AuthRedirect";



// export type MessageDataType = {
//     id: number
//     message: string
// }

type MapStateToPropsType = {
    messagePage: MessagePageType
    // isAuth: boolean
}

type MapDispatchToPropsType = {
    newMessageChange: (newBody: string) => void
    sendMessageClick: () => void
}


let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        messagePage: state.messagePage,
        // isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        newMessageChange: (newBody) => {dispatch(updateNewMessageBodyCreator(newBody))},
        sendMessageClick: () => {dispatch(sendMessageCreator())}

    }
}


export default compose<React.ComponentType>(
    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

// const AuthRedirectComponent = withAuthRedirect (Dialogs)
//
// const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
//
// export default DialogsContainer