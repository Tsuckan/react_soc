import Style_Classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) =>
{
    let path = '/dialogs/' + props.id;

    return(
        <div className={Style_Classes.dialog + ' ' + Style_Classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;