import React from 'react';
import MyPosts from './MyPosts/MyPost';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {AddPostActionType, UpdateNewPostValueType} from "../Redux/Store";
import {ProfilePageType} from "../../App";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import {StoreType} from "../Redux/ReduxStore";


// export type MyPostDataPropsType ={
//     postsData: ProfilePageType
//     updateNewPostText: (text: string) => void
//     addPost: (value: string) => void
// }

// export type PostDataPropsType ={
//     store: StoreType
// }



export type PostDataType = {
    id: number
    message: string
    like: string
    avatar: string
}


const Profile = ()=>{
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer  />
            {/*<MyPosts postsData={props.postsData} dispatch={props.dispatch}  />*/}
        </div>
    )
}
export default Profile