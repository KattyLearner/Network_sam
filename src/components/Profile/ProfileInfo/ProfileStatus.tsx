import React, {useState} from 'react';

type StatusPropsType = {
    status: string
}

const ProfileStatus = (props: StatusPropsType) => {
    const [isEditMode, setIsEditMode] = useState(false)
    return (
        <div>
            {!isEditMode &&
            <div>
                <span onDoubleClick={() => {
                    setIsEditMode(true)
                }}>{props.status}</span>
            </div>
            }
            {isEditMode &&
            <div>
                <input value={props.status} onBlur={() => {
                    setIsEditMode(false)
                }} autoFocus/>
            </div>
            }
        </div>
    )
}

export default ProfileStatus