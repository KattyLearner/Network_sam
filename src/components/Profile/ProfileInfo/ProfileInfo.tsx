import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
   return (
   <div>
       <div className={s.prof}>
           <img src='https://media.istockphoto.com/photos/cute-children-or-baby-card-white-clouds-on-the-light-blue-wooden-picture-id1090975842?b=1&k=6&m=1090975842&s=170667a&w=0&h=g5eRHfTh7wGGhKBbnhUoqLmPDIDc3tF6f4kH_5B23I4='/>
       </div>
       <div className={s.descriptionBlock}>
        avatar description
       </div>
   </div>
)
}

export default ProfileInfo