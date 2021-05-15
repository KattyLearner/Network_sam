import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../Redux/profileReducer";
import MyPost from "./MyPost";
import {ProfilePageType} from "../../../App";
import {AddPostActionType, UpdateNewPostValueType} from "../../Redux/Store";
import {StoreType} from "../../Redux/ReduxStore";


type MyPostContainerPropsType = {
    store: StoreType
}

const MyPostsContainer = (props: MyPostContainerPropsType)=>{

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
       //  let text = newPostElement.current?.value
       // if (text) {
       //  props.dispatch(addPostActionCreator())
       // }
    }


    const updateNewPostText = (value: string) => {
            props.store.dispatch(onPostChangeActionCreator(value))

    }

    return (<MyPost updateNewPostText={updateNewPostText} addPost = {addPost} postsData={state.profilePage}/>)
}

export default MyPostsContainer