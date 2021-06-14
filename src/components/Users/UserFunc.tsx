import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../assets/images/user.png'
import {UsersPageType} from "../Redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userFollowAPI} from "../../API/api";

type UsersFuncPropsType = {
    totalUserCount: number
    pageSize: number
    onPageChanged: (i: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
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
                        <button onClick={() => {

                            // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            //     withCredentials: true,
                            //     headers: {
                            //         'API-KEY': '0282e99c-7779-4bd3-8d6c-8d8e977ec541'
                            //     }
                            // })
                            userFollowAPI.getUnFollow(u.id)
                                .then(response=>{
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                })
                        }}>Unfollow</button>
                        :
                        <button onClick={() => {

                            // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            //     withCredentials: true,
                            //     headers: {
                            //         'API-KEY': '0282e99c-7779-4bd3-8d6c-8d8e977ec541'
                            //     }
                            // })
                            userFollowAPI.getFollow(u.id)
                                .then(response=>{
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })
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