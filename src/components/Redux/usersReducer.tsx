export type FollowACType = ReturnType<typeof follow>
export type UnfollowACType = ReturnType<typeof unfollow>
export type SetUsersACType = ReturnType<typeof setUsers>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setTotalUserCountACType = ReturnType<typeof setTotalUserCount>
export type setFetchingACType = ReturnType<typeof setFetching>

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
}

type UnionTypeUser =  FollowACType | UnfollowACType | SetUsersACType | setCurrentPageACType | setTotalUserCountACType | setFetchingACType

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState: InitialStateType =  {
    users: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action: UnionTypeUser): InitialStateType => {

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


export default usersReducer