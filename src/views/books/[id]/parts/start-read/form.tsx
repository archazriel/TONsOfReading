import React from 'react';
import { Field, FieldProps, Form, Formik } from 'formik';
import classnames from 'classnames';

import TextInput from '@components/common/input';

import styles from './styles.scss';

export const required = (value: any) =>
    !value || (typeof value === 'string' && !value.length)
        ? 'Required'
        : undefined;

interface IFormDate {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
}

function StartReadingForm() {

  const initialValues: IFormDate = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
  };


  const onSubmit = (values) => {
    const objDeal = {
      login: values.login,
      email: values.secretPhrase,
      refundTime: values.refundTime,
    };
    debugger;
  };

  return (
    <div className="create-deal-form">
      <style jsx>{styles}</style>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form autoComplete="off">
          <div className="input-wrapper">
            <Field name="login">
              {(fieldProps: FieldProps) => (
                <TextInput
                  {...fieldProps}
                  label="Login"
                  placeholder="Enter login"
                  clientView={true}
                />
              )}
            </Field>

            <Field name="secretPhrase">
              {(fieldProps: FieldProps) => (
                <TextInput
                  {...fieldProps}
                  label="secret phrase"
                  placeholder="Enter Secret Phrase"
                  clientView={true}
                />
              )}
            </Field>

            <Field name="refundTime">
              {(fieldProps: FieldProps) => (
                <TextInput
                  {...fieldProps}
                  label="Auto refund time"
                  placeholder="Auto Refund Time"
                  clientView={true}
                />
              )}
            </Field>

            <div className="controls">
              <button
                id="continue"
                type="submit"
                className={classnames('control-button continue')}
              >
                Start
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default StartReadingForm;
