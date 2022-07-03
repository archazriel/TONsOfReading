import React, {useRef, useState} from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

interface IProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement> {
    label?: string;
    right?: React.ReactNode;
    touched?: boolean;
    error?: string | undefined;
    icon?: React.ReactNode;
    format?: string;
    mask?: string;
}

function Input(
    {label, right, touched, error, icon, format, mask, ...props}: IProps,
    ref: React.Ref<HTMLInputElement>,
) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [active, setActive] = useState(false);

    const onFocus = () => {
        setActive(true);
        inputRef.current?.focus();
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        props.onBlur?.(e);
        setActive(false);
    };

    const isErrorVisible = touched && error && !active;

    return (
        <div
            className={classNames('input-container', {
                error: isErrorVisible,
                readonly: props.readOnly,
            })}
        >
            {label && <span className="label">{label}</span>}
            <style jsx>{styles}</style>
            <div onClick={onFocus} className="input-wrapper">
                {icon}
                <input
                    {...props}
                    autoComplete="off"
                    onBlur={onBlur}
                />
                {right}
                {isErrorVisible && (
                    <div className="error-message">
                        <span>{error}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export type InputProps = IProps;

export default React.forwardRef(Input);
