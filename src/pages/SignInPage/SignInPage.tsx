import PageTitle from 'components/Title/PageTitle'
import 'pages/Pages.scss'
import Button from 'components/Button/Button'
import { Link } from 'react-router-dom'
import TextInput from 'components/FormInputs/TextInput'
import { Formik, Form } from 'formik'
import PasswordInput from 'components/FormInputs/PasswordInput'
import { SignInSchema } from 'Schemas/schemas'

type Props = {}

const SignInPage = (props: Props) => {
  return (
    <div className="form-container">
      <PageTitle>Sign In</PageTitle>

      <div>
        <Formik
          initialValues={{
            userName: '',
            password: '',
          }}
          validationSchema={SignInSchema}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Form>
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

            {/* <Link to={'/main'}> */}
            <Button>Sign In</Button>
            {/* </Link> */}
          </Form>
        </Formik>
        <p className="account-message">
          Don’t have account yet?
          <span>
            <Link to={'/sign-up'}> New Account</Link>
          </span>
        </p>
      </div>
    </div>
  )
}
export default SignInPage
