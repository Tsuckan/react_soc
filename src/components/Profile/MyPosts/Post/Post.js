import React from "react";
import Style_Classes from './Post.module.css'
const Post = (props) =>
{
    return(
        <div className={Style_Classes.content}>
            <div className={Style_Classes.item}>
                <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt=""/>
                {props.message}
                <p>Likes count: {props.likesCount}</p>
            </div>
        </div>
    )
}

export default Post