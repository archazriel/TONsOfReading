import React, { useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  containerclassname?: string;
  touched?: boolean;
  error?: string | undefined;
  icon?: React.ReactNode;
}

function ClientInput(
  { label, touched, error, icon, containerclassname, ...props }: IProps,
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
      id="input-container"
      className={classNames('input-container', containerclassname, {
        error: isErrorVisible,
        readonly: props.readOnly,
        active,
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

export default React.forwardRef(ClientInput);
