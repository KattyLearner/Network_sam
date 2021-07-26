import React from 'react';
import Profile  from "./Profile";
import {AppStateType} from "../Redux/ReduxStore";
import {connect} from "react-redux";
import {getProfileThunkCreator, setUserProfile} from "../Redux/profileReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";



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
    // isAuth: boolean
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
        return (
                <Profile {...this.props} profile = {this.props.profile} />
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType=> ({
    profile: state.profilePage.profile,
    // isAuth: state.auth.isAuth
})


export default compose<React.ComponentType>(
    connect (mapStateToProps, {setUserProfile, getProfileThunkCreator } ),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer)


// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
//
// export default connect (mapStateToProps, {setUserProfile, getProfileThunkCreator } ) (WithUrlDataContainerComponent)