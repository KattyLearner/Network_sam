import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../assets/images/user.png'
import {UsersPageType} from "../Redux/usersReducer";
import {NavLink} from "react-router-dom";


type UsersFuncPropsType = {
    totalUserCount: number
    pageSize: number
    onPageChanged: (i: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    getUnFollowThunkCreator: (id: number) => void
    getFollowThunkCreator: (id: number) => void
    followingInProgress: Array<number>
    currentPage: number
    users: UsersPageType
}
const UsersFunc = (props:UsersFuncPropsType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i=1; i < pagesCount; i++){
        pages.push(i)
    }

    return (<div>
        <div>
            {pages.map(i => {
                return <span onClick={() => {
                    props.onPageChanged(i) // @ts-ignore
                }} className={props.currentPage === i && styles.selectedPage}> {i} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                   <NavLink to={'/profile/' + u.id}>
                       <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                   </NavLink>
                </div>
                <div>
                    {u.followed
                        ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {props.getUnFollowThunkCreator(u.id)}
                                }>Unfollow</button>
                        :
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {props.getFollowThunkCreator(u.id)
                        }}>Follow</button>
                    }
                </div>
            </span>
                    <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
                </div>
            )
        }
    </div>)
}
export default UsersFunc