import React from "react";
import Style_Classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) =>
{
    return(
        <div className={Style_Classes.content}>
            <ProfileInfo/>
            <MyPosts PostData={props.state}/>
        </div>
    )
}

export default Profile