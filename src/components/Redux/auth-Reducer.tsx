import {Dispatch} from "redux";
import {headerAPI} from "../../API/api";
import {AppActionCreatorsTypes} from "./ReduxStore";

type SetUserDataACType = ReturnType<typeof setAuthUserData>
type InitialStateType = {
    id: number | null
    email: string  | null
    login: string | null
    isAuth: boolean
}
export type UnionAuthTypesAC = SetUserDataACType


const SET_USER_DATA = 'SET_USER_DATA'
let initialState: InitialStateType =  {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: UnionAuthTypesAC) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default: return state
    }

}

export const setAuthUserData = (id: number, email: string, login: string) => ({type: SET_USER_DATA, data: {id, email, login}} as const)

export const getAuthThunkCreator = () => {
    return (dispatch: Dispatch<AppActionCreatorsTypes>) => {
        headerAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {id,email, login} = response.data.data
                dispatch(setAuthUserData (id,email, login))
            }
        })
            }
}


export default authReducer

