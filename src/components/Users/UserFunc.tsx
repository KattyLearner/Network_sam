import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../assets/images/user.png'
import {UsersPageType} from "../Redux/usersReducer";

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
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                </div>
                <div>
                    {u.followed
                        ?
                        <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        :
                        <button onClick={() => {
                            props.follow(u.id)
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