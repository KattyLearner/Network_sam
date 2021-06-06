import React from 'react';
import {StateType} from "../../App";
import profileReducer, {addPostActionCreator, onPostChangeActionCreator} from "./profileReducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogsReducer";
import {followAC, setCurrentPageAC, setFetchingAC, setTotalUserCountAC, setUsersAC, unfollowAC} from "./usersReducer";


export type StoreType = {
    _state: StateType
    _rerenderEntireTree: (state: StateType) => void

    getState: () => void
    subscribe: (observer: () => void) => void

    dispatch: (action: AddPostActionType | UpdateNewPostValueType | UpdateNewMessageBodyType | UpdateSendMessageType ) => void

}


export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostValueType = ReturnType<typeof onPostChangeActionCreator>
export type UpdateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyCreator>
export type UpdateSendMessageType = ReturnType<typeof sendMessageCreator>
export type FollowACType = ReturnType<typeof followAC>
export type UnfollowACType = ReturnType<typeof unfollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setTotalUserCountACType = ReturnType<typeof setTotalUserCountAC>
export type setFetchingACType = ReturnType<typeof setFetchingAC>

let store:  StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    message: 'Hi',
                    like: '8likes',
                    avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'
                },
                {
                    id: 2,
                    message: 'How is it going?',
                    like: '3likes',
                    avatar: 'https://i.mycdn.me/i?r=AzEOxUXG5QgodWC3x6hM10Ckx0BZLGOfgD6nXhJoLZbA4MAmq-mVtRg1TeCwydjhl-Q&fn=sqr_288'
                },
                {
                    id: 3,
                    message: 'What\'s up?',
                    like: '1likes',
                    avatar: 'https://illustrators.ru/uploads/illustration/image/1295608/main_%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0_2.jpg'
                },
                {
                    id: 4,
                    message: 'How are you?',
                    like: '7likes',
                    avatar: 'https://99px.ru/sstorage/56/2017/05/11505171723012442.jpg'
                },
            ],
            newPostValue: '',
        },
        messagePage: {
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
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree() {
        console.log('state is changed')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.messagePage, action)

        this._rerenderEntireTree(this._state)


    }
}


export default store

