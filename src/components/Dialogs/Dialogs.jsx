import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem"
import Message from "./Message/Message"

const Dialogs = (props) => {
    let dialogsElements = 
        props.state.messages.map ( d => <DialogItem name = {d.name} id={d.id}/>);

    let messagesElements = 
        props.state.messages.map ( m => <div className={s.messagesItemStyle}><Message message = {m.message}/></div>);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let message = newMessageElement.current.value;
            alert (message);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsTtems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea ref = {newMessageElement}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send message</button>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Dialogs;