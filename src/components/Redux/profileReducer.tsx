import {PostDataType} from "../Profile/Profile";
import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogsReducer";
import {UserProfileType} from "../Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI, userFollowAPI} from "../../API/api";
import {follow, setFetchingProgress} from "./usersReducer";
import {AppActionCreatorsTypes} from "./ReduxStore";

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostValueType = ReturnType<typeof onPostChangeActionCreator>
export type UpdateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyCreator>
export type UpdateSendMessageType = ReturnType<typeof sendMessageCreator>
export type SetUserProfileType = ReturnType<typeof setUserProfile>

const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

export type UnionProfileTypesAC = AddPostActionType | UpdateNewPostValueType | UpdateNewMessageBodyType | UpdateSendMessageType | SetUserProfileType
export type InitialStateType = {
    postsData: PostDataType[]
    newPostValue: string
    profile: UserProfileType | null
}

let initialState =  {
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
    profile: null
}

const profileReducer = (state: InitialStateType = initialState, action: UnionProfileTypesAC) => {

    switch (action.type) {
        case ADD_POST: {
            const newPost: PostDataType = {
                id: 5,
                message: state.newPostValue,
                like: '0 likes',
                avatar: 'https://2.bp.blogspot.com/-YEnAKE_GJX8/XIv9wTCbXXI/AAAAAAAAAGs/nDICcMdoMIoFSvbPhpcfVNTb1LaJYQWYQCK4BGAYYCw/s1600/myAvatar.png'
            }
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost)
            stateCopy.newPostValue = ''
            return stateCopy }

        case UPDATE_NEW_POST_VALUE: {
            let stateCopy = {...state}
            stateCopy.newPostValue = action.postText
            return stateCopy }

        case SET_USER_PROFILE: {
            let stateCopy = {...state, profile: action.profile}
            return stateCopy
        }

        default: return state
    }

}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const onPostChangeActionCreator = (value: string) => ({type: UPDATE_NEW_POST_VALUE , postText: value } as const)
export const setUserProfile = (profile: UserProfileType) => ({type: SET_USER_PROFILE, profile } as const)

export const getProfileThunkCreator = (userId: number) => {
    return (dispatch: Dispatch<AppActionCreatorsTypes> ) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}



export default profileReducer

