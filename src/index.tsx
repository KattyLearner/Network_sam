import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import state, {addPost,subscribe, updateNewPostValue} from "./components/Redux/State";
import ReactDOM from "react-dom";
import App, {StateType} from "./App";
// import store from "./components/Redux/Store";
import store from "./components/Redux/ReduxStore"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


// let rerenderEntireTree = (state: StateType) => {ReactDOM.render(
//     <React.StrictMode>
//         {/*<App store={store}/>*/}
//         <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
//     </React.StrictMode>,
//     document.getElementById('root')
// )
// }

let rerenderEntireTree = () => {ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
}

// rerenderEntireTree (store.getState())
rerenderEntireTree ()


// store.subscribe(()=> {
//     let state = store.getState()
//     rerenderEntireTree(state)
// })

store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree()
})
reportWebVitals();
