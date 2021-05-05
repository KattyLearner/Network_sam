import React from 'react';
import {PostDataType} from "../Profile/Profile";
import {StateType} from "../../App";


export type StoreType = {
    _state: StateType
    _rerenderEntireTree: () => void

    getState: () => void
    subscribe: (observer: () => void) => void

    // addPost: () => void
    // updateNewPostValue: (postText: string) => void

    dispatch: (action: AddPostActionType | UpdateNewPostValueType) => void

}

// export type AddPostActionType = {
//     type: 'ADD-POST'
// }
// export type UpdateNewPostValueType = {
//     type: 'UPDATE-NEW-POST-VALUE'
//     postText: string
// }

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostValueType = ReturnType<typeof onPostChangeActionCreator>

const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE'

const ADD_POST = 'ADD-POST'

let store:  StoreType ={
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi', like: '8likes', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
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
            dialogsData: [
                {id: 1, name: 'Anna'},
                {id: 2, name: 'Vlad'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Darya'},
                {id: 5, name: 'Vika'},
                {id: 6, name: 'Mia'}
            ]
        },
        messagePage: {
            messageData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is it going'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'What is up?'},
                {id: 5, message: 'What?'},
            ],
        }
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree() {
        console.log('state is changed')
    },
    // addPost() {
    //     const newPost: PostDataType = {
    //         id: 5,
    //         message: this._state.profilePage.newPostValue,
    //         like: '0 likes',
    //         avatar: 'https://2.bp.blogspot.com/-YEnAKE_GJX8/XIv9wTCbXXI/AAAAAAAAAGs/nDICcMdoMIoFSvbPhpcfVNTb1LaJYQWYQCK4BGAYYCw/s1600/myAvatar.png'
    //     }
    //     this._state.profilePage.postsData.push(newPost)
    //     this._state.profilePage.newPostValue= ''
    //     this._rerenderEntireTree()
    // },
    // updateNewPostValue (postText) {
    //     this._state.profilePage.newPostValue = postText
    //     this._rerenderEntireTree()
    // },
    subscribe (observer)  {
        this._rerenderEntireTree=observer
    },

    dispatch (action) {
        if(action.type === ADD_POST) {
            const newPost: PostDataType = {
                id: 5,
                message: this._state.profilePage.newPostValue,
                like: '0 likes',
                avatar: 'https://2.bp.blogspot.com/-YEnAKE_GJX8/XIv9wTCbXXI/AAAAAAAAAGs/nDICcMdoMIoFSvbPhpcfVNTb1LaJYQWYQCK4BGAYYCw/s1600/myAvatar.png'
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostValue= ''
            this._rerenderEntireTree()
        } else if (action.type === UPDATE_NEW_POST_VALUE){
            this._state.profilePage.newPostValue = action.postText
            this._rerenderEntireTree()
        }
    }

}

export const addPostActionCreator = () => ({type: ADD_POST} as const)

export const onPostChangeActionCreator = (value: string) => ({type: UPDATE_NEW_POST_VALUE , postText: value } as const)




export default store

