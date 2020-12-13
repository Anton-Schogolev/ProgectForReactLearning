import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";

type PropsType = {
    makeHeaderBe: boolean
}

function Header({makeHeaderBe}: PropsType) {
    return (<>
            {makeHeaderBe && <div className={s.container}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>
                    <div className={s.item}>preJunior</div>
                </NavLink>
                <NavLink to={PATH.JUNIOR} activeClassName={s.active}>
                    <div className={s.item}>junior</div>
                </NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>
                    <div className={s.item}>junior+</div>
                </NavLink>
            </div>}
        </>
    );
}

export default Header;
