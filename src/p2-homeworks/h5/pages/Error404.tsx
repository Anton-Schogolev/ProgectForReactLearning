import React, {useState,MouseEvent} from "react";
import s from "./Error404.module.css"

type Coordinates = {
    'top': number
    'left': number
}
function Error404() {
    const[coordinates,setCoordinates] = useState<Coordinates>({top:0,left:0})
    function callback(event: MouseEvent<HTMLDivElement>) {
        setCoordinates({top:event.pageY,left:event.pageX})
    }
    return (
        <div className={s.container} onMouseMove={callback}>

            <div className={s.text}>
                <h1>404</h1>
                <h2>Uh, Ohh</h2>
                <h3>Sorry we cant find what you are looking for 'cuz its so dark in here</h3>
            </div>
            <div className={s.torch} style={coordinates}/>
        </div>
    );
}

export default Error404;
