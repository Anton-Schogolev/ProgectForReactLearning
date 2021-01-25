import React from "react";
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

type SuperDoubleRangePropsType = {
    onChangeRange: (value: number[]) => void
    value: number[]
    min: number, max: number, step?: number//, disable, ...
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step= 1
    }
) => {

    return (
        <><div style={{ width: 200, margin: 50 } }>
            <Range step={step} value={value} onChange={onChangeRange} min={min} max={max}/>
        </div></>
    );
}

export default SuperDoubleRange;
