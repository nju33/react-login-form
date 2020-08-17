import React from 'react'
import { LoginForm } from '.'

export default {
  title: 'LoginForm',
  component: LoginForm
}

const Template = (args: any): React.ReactNode => <LoginForm {...args} />

export const LoginFormStory = Template.bind({})
