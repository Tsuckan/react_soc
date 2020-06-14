import React from "react";
import Style_Classes from './MyPosts.module.css'
import Post from "./Post/Post";
const MyPosts = (props) =>
{
    let PostElements = props.PostData.posts.map((el) => {
        return <Post likesCount={el.likesCount} message={el.message}/>;
    })
    return(
        <div className={Style_Classes.content}>
            <div className='Menu_Item'>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            {PostElements}
        </div>
    )
}

export default MyPosts