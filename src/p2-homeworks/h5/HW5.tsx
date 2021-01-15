import React, {useState, MouseEvent} from "react";
import Header from "./Header";
import Routes from "./Routes";
import {HashRouter} from "react-router-dom";

function HW5() {
    const [makeHeaderBe, setMakeHeaderBe] = useState<boolean>(true)
    const mouseMoveZhdun = (event: MouseEvent<HTMLDivElement>) => {
        if (event.pageY < 41) {
            setMakeHeaderBe(true)
        } else setMakeHeaderBe(false)
    }
    return (
        <div onMouseMove={mouseMoveZhdun}>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header makeHeaderBe={makeHeaderBe}/>
                <Routes/>
            </HashRouter>
        </div>
    );
}

export default HW5;
