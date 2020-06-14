import React from "react";
import Style_Classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={Style_Classes.content}>
            <div>
                <img src="https://s1.1zoom.me/big3/297/Canada_Mountains_Scenery_488936.jpg" alt=""/>
            </div>
            <div className={Style_Classes.Description}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo