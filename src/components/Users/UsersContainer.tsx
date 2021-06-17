import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    InitialStateType, setCurrentPage, setFetching, setFetchingProgress, setTotalUserCount, setUsers, unfollow,
    UsersPageType
} from "../Redux/usersReducer";
import {AppStateType} from "../Redux/ReduxStore";
import UsersFunc from "./UserFunc";
import Preloader from "../Common/Preloader";
import {userAPI} from "../../API/api";



export type MapStateToPropsType = {
    usersPage: InitialStateType
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersPageType ) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    setFetching: (isFetching: boolean) => void
    setFetchingProgress: (isFetching: boolean, userId: number) => void
}

class UserContainerComponent extends React.Component<UsersPropsType, AppStateType> {
    componentDidMount() {
        this.props.setFetching(true)
        userAPI.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
            .then(data => {
                this.props.setFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUserCount(data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.setFetching(true)
        userAPI.getUsers(p, this.props.usersPage.pageSize)
            .then(data=>{
                this.props.setFetching(false)
                this.props.setUsers(data.items)

            })
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
                       setFetchingProgress={this.props.setFetchingProgress}
                       followingInProgress={this.props.usersPage.followingInProgress}
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

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


export const UsersContainer = connect (mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    setFetching,
    setFetchingProgress
    })(UserContainerComponent)