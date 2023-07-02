import { useState } from 'react'
import PageTitle from 'components/Title/PageTitle'
import 'pages/Pages.scss'
import Button from 'components/Button/Button'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import TextInput from 'components/FormInputs/TextInput'
import PasswordInput from 'components/FormInputs/PasswordInput'

type Props = {}

const SignUpPage = (props: Props) => {
  return (
    <div className="form-container">
      <PageTitle>Sign Up</PageTitle>

      <div>
        <Formik
          initialValues={{
            fullName: '',
            userName: '',
            password: '',
            confirmedPassword: '',
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Form>
            <TextInput
              name={'fullName'}
              id={'full-name-input'}
              label={'Full Name'}
              placeholder={'Example Name'}
            />

            <TextInput
              name={'userName'}
              id={'user-name-input'}
              label={'User Name'}
              placeholder={'Example123'}
            />

            <PasswordInput
              name={'password'}
              id={'password-input'}
              label={'Password'}
              placeholder={'***************'}
            />

            <PasswordInput
              name={'confirmedPassword'}
              id={'confirmed-password-input'}
              label={'Confirm Password'}
              placeholder={'***************'}
            />

            {/* <Link to={'/sign-up'}> */}
            <Button>Sign Up</Button>
            {/* </Link> */}
          </Form>
        </Formik>
        <p className="account-message">
          I have an account.
          <span>
            <Link to={'/sign-in'}> Go to Sign in</Link>
          </span>
        </p>
      </div>
    </div>
  )
}
export default SignUpPage
