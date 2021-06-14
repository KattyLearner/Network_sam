import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0282e99c-7779-4bd3-8d6c-8d8e977ec541'
    }
})

export const userAPI = {
     getUsers(currentPage = 1, pageSize = 10) {
         return instance.get(`users?page=${currentPage}&count=${pageSize}`)
             .then(response => {
                 return response.data
             })
     }
 }

export const headerAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    }
}

export const userFollowAPI = {
    getFollow (id) {
        return instance.post(`follow/${id}`, {})
    },
    getUnFollow(id) {
        return instance.delete(`follow/${id}`)
    }
}



