import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import state, {addPost,subscribe, updateNewPostValue} from "./components/Redux/State";
import ReactDOM from "react-dom";
import App, {StateType} from "./App";
// import store from "./components/Redux/Store";
import store from "./components/Redux/ReduxStore"


let rerenderEntireTree = (state: StateType) => {ReactDOM.render(
    <React.StrictMode>
        {/*<App store={store}/>*/}
        <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
)
}

rerenderEntireTree (store.getState())

// store.subscribe(rerenderEntireTree)
store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree(state)
})

// state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostValue={store.updateNewPostValue.bind(store)}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
