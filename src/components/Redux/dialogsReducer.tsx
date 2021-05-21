import {MessagePageType, StateType} from "../../App";
import {AddPostActionType, UpdateNewMessageBodyType, UpdateNewPostValueType, UpdateSendMessageType} from "./Store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState =  {
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is it going'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'What is up?'},
        {id: 5, message: 'What?'},
    ],
    newMessageBody: '',
    dialogsData: [
        {id: 1, name: 'Anna'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Darya'},
        {id: 5, name: 'Vika'},
        {id: 6, name: 'Mia'}
    ]
}

const dialogsReducer = (state = initialState, action: AddPostActionType | UpdateNewPostValueType | UpdateNewMessageBodyType | UpdateSendMessageType) => {

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