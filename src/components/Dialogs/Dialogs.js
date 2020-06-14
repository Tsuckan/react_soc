import React from "react";
import Style_Classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";





const Dialogs = (props) =>
{
    let dialogsElements = props.state.dialogs.map((el) => {
        return <DialogItem id={el.id} name={el.name}/>;
    })

    let messagesElements = props.state.messages.map((el) => {
        return <Message id={el.id} message={el.message}/>;
    })
    return(
        <div className={Style_Classes.dialogs}>
            <div className={Style_Classes.DialogsItems}>

                {dialogsElements}
            </div>
            <div className={Style_Classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;