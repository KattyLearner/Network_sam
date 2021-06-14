import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostContainer";
import {UserProfileType} from "./ProfileContainer";


export type PostDataType = {
    id: number
    message: string
    like: string
    avatar: string
}
export type ProfileForContainerPropsType = {
    profile: UserProfileType | null
}

const Profile = (props: ProfileForContainerPropsType)=>{
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer  />
        </div>
    )
}
export default Profile