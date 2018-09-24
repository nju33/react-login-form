import React from 'react';
import {Formik, FormikProps} from 'formik';
import {string as yupString, object as yupObject} from 'yup';
import {Form} from './form.atom';
import {Field} from './field.atom';
import {Label} from './label.atom';
import {Input} from './input.atom';
import {Button} from './button.atom';
import {ErrorMessage} from './error-message.atom';

export interface LoginFormDefaultProps {
  onSubmit: any;
}

export const Default: React.SFC<LoginFormDefaultProps> = ({onSubmit}) => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={yupObject().shape({
        email: yupString()
          .email('メールアドレスを入力してください')
          .required('メールアドレスは必須項目です'),
        password: yupString().required('メールアドレスは必須項目です')
      })}
      onSubmit={onSubmit}
    >
      {(formikProps: FormikProps<any>) => {
        const invalidEmail = Boolean(
          formikProps.errors.email && formikProps.touched.email
        );
        const invalidPassword = Boolean(
          formikProps.errors.password && formikProps.touched.password
        );

        return (
          <Form onSubmit={formikProps.handleSubmit}>
            <Field>
              <Label htmlFor="email">メールアドレス</Label>
              <Input
                id="email"
                name="email"
                onBlur={formikProps.handleBlur}
                onChange={formikProps.handleChange}
                aria-invalid={invalidEmail}
              />
              <ErrorMessage aria-invalid={invalidEmail}>
                {formikProps.errors.email}
              </ErrorMessage>
            </Field>
            <Field>
              <Label htmlFor="password">パスワード</Label>
              <Input
                id="password"
                type="password"
                name="password"
                onBlur={formikProps.handleBlur}
                onChange={formikProps.handleChange}
                aria-invalid={invalidPassword}
              />
              <ErrorMessage aria-invalid={invalidPassword}>
                {formikProps.errors.password}
              </ErrorMessage>
            </Field>
            <Field>
              <Button type="submit" disabled={!formikProps.isValid}>
                ログイン
              </Button>
            </Field>
          </Form>
        );
      }}
    </Formik>
  );
};
