import Style_Classes from "../Dialogs.module.css";
import React from "react";

const Message = (props) =>
{
    return(
        <div className={Style_Classes.message}>{props.message}</div>
    )
}

export default Message;