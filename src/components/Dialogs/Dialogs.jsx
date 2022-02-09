import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem"
import Message from "./Message/Message"

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Dima'},
        { id: 2, name: 'Andrey'},
        { id: 3, name: 'Sveta'},
        { id: 4, name: 'Sasha'},
        { id: 5, name: 'Viktor'},
        { id: 6, name: 'Artyr'}
    ]

    let messages = [
        { id: 1, message: 'Hi'},
        { id: 2, message: 'How are you?'},
        { id: 3, message: 'Yo'},
        { id: 4, message: 'My english is beautiful'},
        { id: 5, message: 'Privet Ded'},
        { id: 6, message: 'Nice car'}
    ]

    let dialogsElements = 
        dialogs.map ( d => <DialogItem name = {d.name} id={d.id}/>);

    let messagesElements = 
        messages.map ( m => <Message message = {m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsTtems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;