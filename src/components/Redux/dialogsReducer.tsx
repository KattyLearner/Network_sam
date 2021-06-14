import {
    AddPostActionType,
    UpdateNewMessageBodyType,
    UpdateNewPostValueType,
    UpdateSendMessageType
} from "./profileReducer";


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
  let stateCopy = {
      ...state,
      messageData: [...state.messageData]
  }

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.newBody
            return stateCopy
        case SEND_MESSAGE:
            let body = stateCopy.newMessageBody
            stateCopy.newMessageBody = ''
            stateCopy.messageData.push({id: 6, message: body})
            return stateCopy
        default:
            return state
    }
}

export const updateNewMessageBodyCreator = (value: string) => ({type: UPDATE_NEW_MESSAGE_BODY , newBody: value } as const)
export const sendMessageCreator = () => ({type: SEND_MESSAGE } as const)

export default dialogsReducer