import React from 'react';
import Profile  from "./Profile";
import {AppStateType} from "../Redux/ReduxStore";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../Redux/profileReducer";
import {Dispatch} from "redux";
import { withRouter } from 'react-router-dom';


export type UserProfileType = {
    aboutMe: {
        facebook: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type MapType = {
    profile: UserProfileType | null
}

type MapDispatchToPropsProfileType = {
    setUserProfile: (profile: UserProfileType) => void
}

type ProfileContainerPropsType = MapType & MapDispatchToPropsProfileType


class ProfileContainer extends React.Component<ProfileContainerPropsType, AppStateType>{
    componentDidMount() {
        // @ts-ignore
        let userId = this.props.match.params.userId
        if (!userId){
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render () {
        return (
                <Profile {...this.props} profile = {this.props.profile} />
        )
    }
}

let mapStateToProps = (state: AppStateType): MapType=> ({
    profile: state.profilePage.profile
})

let mapDispatchToProps = (dispatch: Dispatch ): MapDispatchToPropsProfileType => {
    return {
        setUserProfile: (profile: UserProfileType) => {dispatch(setUserProfile(profile))}
    }
}


// @ts-ignore
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, mapDispatchToProps ) (WithUrlDataContainerComponent)