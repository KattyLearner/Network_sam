import React from 'react';
import Profile  from "./Profile";
import {AppStateType} from "../Redux/ReduxStore";
import {connect} from "react-redux";
import {getProfileThunkCreator, setUserProfile} from "../Redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';



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
export type MapStatePropsType = {
    profile: UserProfileType | null
    isAuth: boolean
}
type MapDispatchToPropsProfileType = {
    setUserProfile: (profile: UserProfileType) => void
    getProfileThunkCreator: (userId: number) => void
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchToPropsProfileType

type PathStatePropsType = {
    userId: number
}
// @ts-ignore
type PropsType = RouteComponentProps <PathStatePropsType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<PropsType, AppStateType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = 2
        }

        this.props.getProfileThunkCreator(userId)
    }

    render () {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
                <Profile {...this.props} profile = {this.props.profile} />
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType=> ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, {setUserProfile, getProfileThunkCreator } ) (WithUrlDataContainerComponent)