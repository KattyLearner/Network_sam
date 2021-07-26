import {userAPI, userFollowAPI} from "../../API/api";
import {Dispatch} from "redux";
import {AppActionCreatorsTypes} from "./ReduxStore";

export type FollowACType = ReturnType<typeof follow>
export type UnfollowACType = ReturnType<typeof unfollow>
export type SetUsersACType = ReturnType<typeof setUsers>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setTotalUserCountACType = ReturnType<typeof setTotalUserCount>
export type setFetchingACType = ReturnType<typeof setFetching>
export type setFetchingProgressType = ReturnType<typeof setFetchingProgress>

export type UsersPageType = Array<UsersType>

export type UsersType = {
    name: string
    id: number
    uniqueUrName: string
    photos: PhotoType
    status: string
         followed: boolean
    // location: LocationType
}

export type PhotoType = {
    small: string
    large: string
}

export type InitialStateType = {
    users: UsersPageType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type UnionTypeUserAC =  FollowACType | UnfollowACType | SetUsersACType | setCurrentPageACType | setTotalUserCountACType | setFetchingACType | setFetchingProgressType

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState: InitialStateType =  {
    users: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action: UnionTypeUserAC): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                if (u.id === action.userID) {
                  return  {...u, followed: true}
                }
                    return u
                })
            }
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return  {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
                return  {...state, currentPage: action.currentPage}
            }
        case SET_TOTAL_USERS_COUNT: {
            return  {...state, totalUserCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return  {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return  {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userUd] : state.followingInProgress.filter(id => id != action.userUd)}
        }
        default:
            return state
    }
}

export const follow = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollow = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: UsersPageType) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUserCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const)
export const setFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const setFetchingProgress = (isFetching: boolean, userUd: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userUd} as const)


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<AppActionCreatorsTypes>) => {
        dispatch(setFetching(true))
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUserCount(data.totalCount))
            })
    }
}
export const getUnFollowThunkCreator = (id: number) => {
    return (dispatch: Dispatch<AppActionCreatorsTypes> ) => {
        dispatch(setFetchingProgress(true, id))
        userFollowAPI.getUnFollow(id)
            .then(response=>{
                    if (response.data.resultCode === 0) {
                        dispatch(unfollow(id))
                    }
                    dispatch(setFetchingProgress(false, id))
                }
            )
    }
}
export const getFollowThunkCreator = (id: number) => {
    return (dispatch: Dispatch<AppActionCreatorsTypes> ) => {
       dispatch(setFetchingProgress(true, id))
        userFollowAPI.getFollow(id)
            .then(response=>{
                if (response.data.resultCode === 0) {
                    dispatch(follow(id))
                }
                dispatch(setFetchingProgress(false, id))
            })
    }
}


export default usersReducer