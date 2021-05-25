import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./components/Redux/ReduxStore"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


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
