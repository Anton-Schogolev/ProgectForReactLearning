import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    return (
        <div className={s.flex}>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                onEnter={addUser}
                error={error}
                label={"Name"}
            />
            <SuperButton onClick={addUser}>add</SuperButton>
            <span> {totalUsers}</span>
        </div>
    );
}

export default Greeting;
