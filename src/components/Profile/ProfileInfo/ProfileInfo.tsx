import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileForContainerPropsType} from "../Profile";
import Preloader from "../../Common/Preloader";

const ProfileInfo = (props: ProfileForContainerPropsType) => {
    if (!props.profile) {
       return  <Preloader />
    }
    return (
   <div>
       <div className={s.prof}>
           <img src='https://i0.wp.com/www.euroscientist.com/wp-content/uploads/2019/06/cropped-social-media-3846597_1280-1.png?resize=672%2C372&ssl=1'/>
       </div>
       <div className={s.descriptionBlock}>
           <img
               src={props.profile.photos.large}/>
        avatar description
       </div>
   </div>
)
}

export default ProfileInfo