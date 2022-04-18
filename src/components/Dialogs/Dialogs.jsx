import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem"
import Message from "./Message/Message"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/message-reducer";

const Dialogs = (props) => {
    let dialogsElements = 
        props.state.messages.map ( d => <DialogItem name = {d.name} id={d.id}/>);

    let messagesElements = 
        props.state.messages.map ( m => <div className={s.messagesItemStyle}><Message message = {m.message}/></div>);

    let newMessageElement = React.createRef();

    let sendMessage= () => {
        props.dispatch(addMessageActionCreator());
      }

    let addMessage = () => {
        let message = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(message);
        props.dispatch(action);
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
                        <textarea onChange = {addMessage} ref = {newMessageElement}
                        value = {props.addText}>
                        </textarea>
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