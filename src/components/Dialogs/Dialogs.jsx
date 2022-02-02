import React from "react";
import s from "./Dialogs.module.css";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsTtems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dima
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Andrey
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Sveta
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Sasha
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Viktor
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;