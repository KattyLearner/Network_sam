import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../Redux/profileReducer";
import MyPost from "./MyPost";
import {ProfilePageType} from "../../../App";
import {AddPostActionType, UpdateNewPostValueType} from "../../Redux/Store";
import {AppStateType, StoreType} from "../../Redux/ReduxStore";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";
import {DialogPropType} from "../../Dialogs/DialogItem/DialogItem";
import {Dispatch} from "redux";


type MyPostContainerPropsType = {
    store: StoreType
}

// const MyPostsContainer = (props: MyPostContainerPropsType)=>{
//
//     let state = props.store.getState()
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//        //  let text = newPostElement.current?.value
//        // if (text) {
//        //  props.dispatch(addPostActionCreator())
//        // }
//     }
//
//
//     const updateNewPostText = (value: string) => {
//             props.store.dispatch(onPostChangeActionCreator(value))
//
//     }
//
//     return (<MyPost updateNewPostText={updateNewPostText} addPost = {addPost} postsData={state.profilePage}/>)
// }


type MapStateToPropsType = {
    profilePage: ProfilePageType
}

type MapDispatchToPropsType = {
    updateNewPostText: (value: string) => void
    addPost: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch ): MapDispatchToPropsType => {
    return {
        updateNewPostText: (value) => {dispatch(onPostChangeActionCreator(value))},
        addPost: () => {dispatch(addPostActionCreator())}

    }
}
const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPost)


export default MyPostsContainer