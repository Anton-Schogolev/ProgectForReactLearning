import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./SuperCheckbox.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
};

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        className, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
        onChange && onChange(e)
    }

    const finalInputClassName = `${s.checkbox} ${className ? className : ""}`;
    const finalSpanClassName = `${!restProps.checked ? s.span : s.line}`
    return (
        <label>
            <input
                type="checkbox"
                id="todo"
                name="todo"
                value="todo"
                onChange={onChangeCallback}
                className={finalInputClassName}
                checked={restProps.checked}

                {...restProps}
            />
            {/*<input*/}
            {/*    type={"checkbox"}*/}
            {/*    onChange={onChangeCallback}*/}
            {/*    className={finalInputClassName}*/}
            {/*    checked={restProps.checked}*/}

            {/*    {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)*/}
            {/*/>*/}
            {children && <span className={finalSpanClassName}>{children}</span>}
        </label> // благодаря label нажатие на спан передастся в инпут
    );
}

export default SuperCheckbox;
