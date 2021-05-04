import React from 'react';
import MyPosts from './MyPosts/MyPost';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type PostDataPropsType ={
    postsData: PostDataType[]
    addPost: () => void
    updateNewPostValue: (postText: string) => void
    newPostValue: string
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
            <MyPosts postsData={props.postsData} addPost={props.addPost} newPostValue={props.newPostValue} updateNewPostValue={props.updateNewPostValue}/>
        </div>
    )
}
export default Profile