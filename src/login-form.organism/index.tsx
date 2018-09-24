import React from 'react';
import {Default, LoginFormDefaultProps} from './default.organism';
import {Container} from './container.atom';

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LoginFormProps {
  onSubmit(values: LoginFormValues): any;
}

export class LoginForm extends React.Component<LoginFormDefaultProps> {
  onSubmit = (values: LoginFormValues) => {
    this.props.onSubmit(values);
  };

  render() {
    return (
      <Container>
        <Default onSubmit={this.onSubmit} />
      </Container>
    );
  }
}
