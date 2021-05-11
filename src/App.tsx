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


export type ProfilePageType={
    dialogsData: DialogPropType[]
    postsData: PostDataType[]
    newPostValue: string
}
export type MessagePageType={
    messageData: MessageDataType[]
    newMessageBody: string
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
                                                            messageData={props.store._state.messagePage.messageData}
                                                            newMessageBody={props.store._state.messagePage.newMessageBody}
                                                            dispatch={props.store.dispatch.bind(props.store)}
                />} />
                <Route path={'/profile'} render ={()=> <Profile
                                                            postsData={props.store._state.profilePage.postsData}
                                                            dispatch={props.store.dispatch.bind(props.store)}
                                                            newPostValue={props.store._state.profilePage.newPostValue}/>} />
                <Route path={'/settings'} render ={()=> <Settings/>} />
                <Route path={'/news'} render ={()=> <News/>} />
            </div>
        </div>
       </BrowserRouter>
    );
}

export default App;
