import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from "react";
import s from "./SuperInputText.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    label?: string
};

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        label,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e); // то передать ему е (поскольку onChange не обязателен)

        onChangeText && onChangeText(e.currentTarget.value);
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        e.key === "Enter" // если нажата кнопка Enter
        && onEnter // и есть пропс onEnter
        && onEnter(); // то вызвать его
    }
    // const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ""}`;
    //
    // const finalInputClassName = `${error ? s.errorInput : className}`; // need to fix with (?:) and s.superInput
    const labelClass = `${s.inp} ${className ? className : ""}`
    label = label ? label : "Input"
    return (
        <>
            <label htmlFor="inp" className={labelClass}>
                <input
                    type="text"
                    id="inp"
                    placeholder="&nbsp;"
                    onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback}
                    {...restProps}
                    className={error ? s.errorL : ""}
                />
                <span className={error ? `${s.errorL} ${s.label}` : s.label}>{error ? error : label}</span>
                <span className={s.focusBg}/>
            </label>
        </>
    );
}

export default SuperInputText;
