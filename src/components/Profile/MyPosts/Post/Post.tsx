import React from 'react';
import s from './Post.module.css'
type PostType ={
    message: string
    like: string
    avatar: string
 }



const Post: React.FC<PostType> = ({message, avatar, like}) =>{
    return (
        <div className={s.item}>
            <img src={avatar}/>
            {message}
            <div>
                <span>{like}</span>
            </div>
        </div>
    )
}

export default Post