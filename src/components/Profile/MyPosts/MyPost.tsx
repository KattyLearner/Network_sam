import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {PostDataPropsType} from "../Profile";
import {addPostActionCreator, onPostChangeActionCreator} from "../../Redux/State";



const MyPosts = (props: PostDataPropsType)=>{

    let postElements = props.postsData.map((post)=> <Post message={post.message} like={post.like} avatar={post.avatar}/> )

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        let text = newPostElement.current?.value
       if (text) {
        props.dispatch(addPostActionCreator())
       }

    }


    let onPostChange = () => {
        let value = newPostElement.current?.value
       if (value) {
           props.dispatch(onPostChangeActionCreator(value))
       }
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea
                              ref={newPostElement}
                              value={props.newPostValue}
                              onChange={onPostChange}
                    />
                </div>
            <div>
                    <button onClick={addPost}>Add Post</button>
            </div>
            </div>
            <div className={s.post}>
                {postElements}
            </div>
       </div>
    )
}

export default MyPosts