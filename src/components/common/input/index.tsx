import React from 'react';
import { FieldProps } from 'formik';

import Input from '@components/common/input/raw-input';
import ClientInput from '@components/common/input/client-input';

interface IProps extends FieldProps {
  placeholder?: string;
  type?: string;
  label?: string;
  icon?: JSX.Element;
  format?: string;
  mask?: string;
  tabIndex?: number;
  right?: React.ReactNode;
  className?: string;
  containerclassname?: string;
  clientView?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  onBlur?: (event) => void;
}

function TextInput(
  {
    placeholder,
    type,
    field,
    meta: { touched, error },
    icon,
    tabIndex,
    right,
    className,
    containerclassname,
    clientView = false,
    value,
    onChange,
    onBlur,
    ...props
  }: IProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const properties = {
    ...field,
    ref,
    placeholder,
    type,
    label: props.label,
    icon,
    format: props.format,
    mask: props.mask,
    tabIndex,
    right,
    touched,
    error,
    className,
    containerclassname,
    value: value || field.value,
    onChange: onChange || field.onChange,
    onBlur: onBlur || field.onBlur,
  };

  return clientView ? (
    <ClientInput {...properties} />
  ) : (
    <Input {...properties} />
  );
}

export { default as Input } from './raw-input';

export default React.forwardRef(TextInput);
