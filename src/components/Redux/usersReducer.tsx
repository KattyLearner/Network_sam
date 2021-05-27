import {FollowACType, SetUsersACType, UnfollowACType} from "./Store";

export type UsersPageType = Array<UsersType>

export type UsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
    photo: string
}

export type LocationType = {
    city: string
    country: string
}
export type InitialStateType = {
    users: UsersPageType
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState: InitialStateType =  {
    users: []
}

const usersReducer = (state = initialState, action: FollowACType | UnfollowACType | SetUsersACType): InitialStateType => {

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
        case SET_USERS:{
            return  {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: UsersPageType) => ({type: SET_USERS, users} as const)


export default usersReducer