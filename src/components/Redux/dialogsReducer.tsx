import {MessagePageType, StateType} from "../../App";
import {AddPostActionType, UpdateNewMessageBodyType, UpdateNewPostValueType, UpdateSendMessageType} from "./State";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state: MessagePageType, action: AddPostActionType | UpdateNewPostValueType | UpdateNewMessageBodyType | UpdateSendMessageType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newBody
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messageData.push({id: 6, message: body})
            break;
    }
    return state
}

export const updateNewMessageBodyCreator = (value: string) => ({type: UPDATE_NEW_MESSAGE_BODY , newBody: value } as const)
export const sendMessageCreator = () => ({type: SEND_MESSAGE } as const)

export default dialogsReducer