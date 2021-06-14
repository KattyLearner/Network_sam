import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'


type HeaderPropsType = {
    isAuth: boolean | null
    login: string| null
    setAuthUserData: (id: number, email: string, login: string) => void
}

const Header = (props:HeaderPropsType)=>{
    return (
        <header className={s.header}>
            <img src='https://www.vippng.com/png/detail/204-2048630_cute-panda-sticker-png-png-download-cute-panda.png'/>

            <div className={s.loginBlock}>
                {
                    props.isAuth
                    ?
                    props.login
                    :
                <NavLink to={'/login'}>Login</NavLink>
                }
            </div>

        </header>
    )
}
 export default Header