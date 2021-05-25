import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile, {PostDataType} from "./components/Profile/Profile";
import Navbar from './components/Bar/Bar';
import  { MessageDataType} from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogPropType} from "./components/Dialogs/DialogItem/DialogItem";

import DialogsContainer from "./components/Dialogs/DialogsContainer";

// type AppPropsType = {
//     dispatch: (action: AddPostActionType | UpdateNewPostValueType | UpdateNewMessageBodyType | UpdateSendMessageType ) => void
//     store: StoreType
//     state: StateType
// }

export type ProfilePageType={
    postsData: PostDataType[]
    newPostValue: string
}
export type MessagePageType={
    messageData: MessageDataType[]
    newMessageBody: string
    dialogsData: DialogPropType[]
}
export type StateType ={
    profilePage: ProfilePageType
    messagePage: MessagePageType
}


const App = () => {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <Navbar/>
                <div className={'appWrapperContent'}>
                    <Route path={'/dialogs'} render ={()=> <DialogsContainer />} />
                    <Route path={'/profile'} render ={()=> <Profile  />} />
                    <Route path={'/settings'} render ={()=> <Settings/>} />
                    <Route path={'/news'} render ={()=> <News/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
