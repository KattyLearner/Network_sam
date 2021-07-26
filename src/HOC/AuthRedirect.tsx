import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../components/Redux/ReduxStore";
import {connect} from "react-redux";


type MapStatePropsTypeRedirect = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsTypeRedirect=> ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsTypeRedirect) => {
        let {isAuth, ...restProps} = props
        if (!props.isAuth) return <Redirect to={'login'}/>

        return <Component {...restProps as T} />
    }


   let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}