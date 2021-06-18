import React from 'react';
import {connect} from "react-redux";
import {
    follow, getFollowThunkCreator, getUnFollowThunkCreator, getUsersThunkCreator,
    InitialStateType, setCurrentPage, setUsers, unfollow, UsersPageType,
} from "../Redux/usersReducer";
import {AppStateType} from "../Redux/ReduxStore";
import UsersFunc from "./UserFunc";
import Preloader from "../Common/Preloader";




export type MapStateToPropsType = {
    usersPage: InitialStateType
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    getUnFollowThunkCreator: (id: number) => void
    getFollowThunkCreator: (id: number) => void
}

class UserContainerComponent extends React.Component<UsersContainerPropsType, AppStateType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.getUsersThunkCreator(p, this.props.usersPage.pageSize)
    }

    render() {
        return <>
            {this.props.usersPage.isFetching ?
                <Preloader/>
            :
                null
            }
            <UsersFunc totalUserCount={this.props.usersPage.totalUserCount}
                       currentPage={this.props.usersPage.currentPage}
                       pageSize={this.props.usersPage.pageSize}
                       users={this.props.usersPage.users}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.usersPage.followingInProgress}
                       getFollowThunkCreator={this.props.getFollowThunkCreator}
                       getUnFollowThunkCreator={this.props.getUnFollowThunkCreator}
        />
        </>
    } }

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.users
        // pageSize: state.users.pageSize,
        // userCount: state.users.totalUserCount

    }
}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


export const UsersContainer = connect (mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsersThunkCreator,
    getUnFollowThunkCreator,
    getFollowThunkCreator
    })(UserContainerComponent)