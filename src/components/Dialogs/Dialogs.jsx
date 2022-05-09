import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem"
import Message from "./Message/Message"
import { addMessages, updateMesseges, } from "../../redux/message-reducer";
import { useDispatch, useSelector } from "react-redux";

const Dialogs = () => {

const messageSelector = useSelector ((state) => state.dialogPage.messages)
const textelector = useSelector ((state) => state.dialogPage.newMessageText)
const dispatch = useDispatch()

    
    let dialogsElements = 
        messageSelector.map ( d => <DialogItem name = {d.name} id={d.id} key={d.id}/>);

    let messagesElements = 
        messageSelector.map ( m => <div className={s.messagesItemStyle} key={m.id}><Message message = {m.message}/></div>);

    let addMessage = (event) => {
        let message = event.target.value;
        let action = updateMesseges(message);
        dispatch(action);
    }

    let sendMessage= () => {
        dispatch(addMessages());
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
                        <textarea 
                            onChange = {addMessage} 
                            value = {textelector}
                            placeholder = 'write message'
                            >
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