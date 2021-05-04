import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile, {PostDataType} from "./components/Profile/Profile";
import Navbar from './components/Bar/Bar';
import Dialogs, { MessageDataType} from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogPropType} from "./components/Dialogs/DialogItem/DialogItem";
import {StoreType} from "./components/Redux/State";

type AppPropsType = {
    store: StoreType
}


type ProfilePageType={
    dialogsData: DialogPropType[]
    postsData: PostDataType[]
    newPostValue: string
}
type MessagePageType={
    messageData: MessageDataType[]
}
export type StateType ={
    profilePage: ProfilePageType
    messagePage: MessagePageType
}

const App = (props: AppPropsType) => {
    return (
       <BrowserRouter>
        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            <div className={'appWrapperContent'}>
                <Route path={'/dialogs'} render ={()=> <Dialogs
                                                            dialogsData={props.store._state.profilePage.dialogsData}
                                                            messageData={props.store._state.messagePage.messageData} />} />
                <Route path={'/profile'} render ={()=> <Profile
                                                            postsData={props.store._state.profilePage.postsData}
                                                            addPost={props.store.addPost.bind(props.store)}
                                                            updateNewPostValue = {props.store.updateNewPostValue.bind(props.store)}
                                                            newPostValue={props.store._state.profilePage.newPostValue}/>} />
                <Route path={'/settings'} render ={()=> <Settings/>} />
                <Route path={'/news'} render ={()=> <News/>} />
            </div>
        </div>
       </BrowserRouter>
    );
}

export default App;
