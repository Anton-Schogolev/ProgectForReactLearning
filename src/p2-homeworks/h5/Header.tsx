import React from "react";
import s from "./Header.module.css"

type PropsType={
    makeHeaderBe:boolean
}

function Header({makeHeaderBe}:PropsType) {
    return (<>
            {makeHeaderBe && <div className={s.container}>
                preJunior junior junior+
            </div>}
        </>
    );
}

export default Header;
