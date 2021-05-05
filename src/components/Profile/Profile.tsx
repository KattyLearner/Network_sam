import React from 'react';
import MyPosts from './MyPosts/MyPost';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {AddPostActionType, UpdateNewPostValueType} from "../Redux/State";

export type PostDataPropsType ={
    postsData: PostDataType[]
    // addPost: () => void
    // updateNewPostValue: (postText: string) => void
    newPostValue: string
    dispatch: (action: AddPostActionType | UpdateNewPostValueType) => void
}

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
            <MyPosts postsData={props.postsData} dispatch={props.dispatch} newPostValue={props.newPostValue} />
        </div>
    )
}
export default Profile