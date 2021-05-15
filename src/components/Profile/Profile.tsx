import React from 'react';
import MyPosts from './MyPosts/MyPost';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {AddPostActionType, UpdateNewPostValueType} from "../Redux/Store";
import {ProfilePageType} from "../../App";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import {StoreType} from "../Redux/ReduxStore";


export type MyPostDataPropsType ={
    postsData: ProfilePageType
    updateNewPostText: (text: string) => void
    addPost: (value: string) => void
}
export type PostDataPropsType ={
    store: StoreType
}

// export type PostDataPropsType ={
//     postsData: PostDataType[]
//     newPostValue: string
//     dispatch: (action: AddPostActionType | UpdateNewPostValueType) => void
// }

export type PostDataType = {
    id: number
    message: string
    like: string
    avatar: string
}


const Profile = (props: PostDataPropsType)=>{
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
            {/*<MyPosts postsData={props.postsData} dispatch={props.dispatch}  />*/}
        </div>
    )
}
export default Profile