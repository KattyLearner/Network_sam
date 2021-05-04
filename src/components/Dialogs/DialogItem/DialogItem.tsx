import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

export type DialogPropType = {
    name: string
    id: number
}


const DialogItem: React.FC<DialogPropType> = ({name, id}) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/'+id}> {name} </NavLink>
        </div>
    )
}


export default DialogItem