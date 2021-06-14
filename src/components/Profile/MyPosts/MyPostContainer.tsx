import React from 'react';
import {addPostActionCreator, InitialStateType, onPostChangeActionCreator} from "../../Redux/profileReducer";
import MyPost from "./MyPost";
import {AppStateType, StoreType} from "../../Redux/ReduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    profilePage: InitialStateType
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