import {ProfilePageType, StateType} from "../../App";
import {AddPostActionType, UpdateNewMessageBodyType, UpdateNewPostValueType, UpdateSendMessageType} from "./State";
import {PostDataType} from "../Profile/Profile";

const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE'
const ADD_POST = 'ADD-POST'


const profileReducer = (state: ProfilePageType, action: AddPostActionType | UpdateNewPostValueType | UpdateNewMessageBodyType | UpdateSendMessageType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostDataType = {
                id: 5,
                message: state.newPostValue,
                like: '0 likes',
                avatar: 'https://2.bp.blogspot.com/-YEnAKE_GJX8/XIv9wTCbXXI/AAAAAAAAAGs/nDICcMdoMIoFSvbPhpcfVNTb1LaJYQWYQCK4BGAYYCw/s1600/myAvatar.png'
            }
            state.postsData.push(newPost)
            state.newPostValue = ''
            break;
        case UPDATE_NEW_POST_VALUE:
            state.newPostValue = action.postText
            break;
    }
    return state
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const onPostChangeActionCreator = (value: string) => ({type: UPDATE_NEW_POST_VALUE , postText: value } as const)



export default profileReducer

