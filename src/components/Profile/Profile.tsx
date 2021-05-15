import React from 'react';
import MyPosts from './MyPosts/MyPost';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {AddPostActionType, UpdateNewPostValueType} from "../Redux/Store";
import {ProfilePageType} from "../../App";


export type PostDataPropsType ={
    postsData: ProfilePageType
    dispatch: (action: AddPostActionType | UpdateNewPostValueType) => void
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
            <MyPosts postsData={props.postsData} dispatch={props.dispatch}  />
        </div>
    )
}
export default Profile