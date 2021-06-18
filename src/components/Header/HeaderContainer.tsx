import React from 'react';
import Header from "./Header";
import {AppStateType} from "../Redux/ReduxStore";
import {connect} from "react-redux";
import {getAuthThunkCreator, setAuthUserData} from "../Redux/auth-Reducer";

type MapStateToPropsType = {
    isAuth: boolean | null
    login: string | null
}
type MapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
    getAuthThunkCreator: () => void
}
type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType
export type AuthType = {
    resultCode: number
    messages: [] | number
    data: {
        id: number | null
        email: string | null
        login: string| null
    }
}

class HeaderContainer extends React.Component<AuthPropsType, AppStateType>{
    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })

        this.props.getAuthThunkCreator()

        // headerAPI.getAuth().then(response => {
        //         if (response.data.resultCode === 0) {
        //             let {id,email, login} = response.data.data
        //             this.props.setAuthUserData (id,email, login)
        //         }
        //     })
    }

    render () {
        return (
        <Header {...this.props} />
    )
}
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
 export default connect (mapStateToProps, {setAuthUserData, getAuthThunkCreator}) (HeaderContainer)