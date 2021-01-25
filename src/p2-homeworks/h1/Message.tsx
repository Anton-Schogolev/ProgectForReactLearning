import React from "react";
import s from "./Message.module.css"

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={s.container}>
            <img src={props.avatar} width={"50px"} alt={""}/>
            <div className={s.messageBlue}>
                <p className={s.name}>{props.name}</p>
                <p className={s.messageContent}>{props.message}</p>
                <p className={s.messageTimestampRight}>{props.time}</p>
            </div>
        </div>
    );
}

export default Message;
