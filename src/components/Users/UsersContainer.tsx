import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC, setTotalUserCountAC,
    setUsersAC,
    unfollowAC,
    UsersPageType
} from "../Redux/usersReducer";

import {Dispatch} from "redux";
import {AppStateType} from "../Redux/ReduxStore";
import axios from "axios";
import UsersFunc from "./UserFunc";


export type MapStateToPropsType = {
    usersPage: InitialStateType
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersPageType ) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
}

class UserContainerComponent extends React.Component<UsersPropsType, AppStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize }`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersPage.pageSize}`)
            .then(response=>{
                this.props.setUsers(response.data.items)

            })
    }

    render() {
        return <UsersFunc totalUserCount={this.props.usersPage.totalUserCount}
                          currentPage={this.props.usersPage.currentPage}
                          pageSize={this.props.usersPage.pageSize}
                          users={this.props.usersPage.users}
                          onPageChanged={this.onPageChanged}
                          follow={this.props.follow}
                          unfollow={this.props.unfollow}
        />
    } }

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.users
        // pageSize: state.users.pageSize,
        // userCount: state.users.totalUserCount

    }
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCount: (totalCount) => {
            dispatch(setTotalUserCountAC(totalCount))
        }
    }
}


export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(UserContainerComponent)