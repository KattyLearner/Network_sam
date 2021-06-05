import {FollowACType, setCurrentPageACType, setTotalUserCountACType, SetUsersACType, UnfollowACType} from "./Store";

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
// export type LocationType = {
//     city: string
//     country: string
// }
export type InitialStateType = {
    users: UsersPageType
    pageSize: number
    totalUserCount: number
    currentPage: number
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

let initialState: InitialStateType =  {
    users: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1,
}

const usersReducer = (state = initialState, action: FollowACType | UnfollowACType | SetUsersACType | setCurrentPageACType | setTotalUserCountACType): InitialStateType => {

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
        default:
            return state
    }
}

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: UsersPageType) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUserCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const)


export default usersReducer