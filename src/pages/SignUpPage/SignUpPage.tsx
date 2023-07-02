import PageTitle from 'components/Title/PageTitle'
import 'pages/Pages.scss'
import Button from 'components/Button/Button'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import TextInput from 'components/FormInputs/TextInput'
import PasswordInput from 'components/FormInputs/PasswordInput'
import { SignUpSchema } from 'Schemas/schemas'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type Props = {}

type UserData = {
  fullName: string
  userName: string
  email: string
  password: string
  confirmedPassword: string
}

const SignUpPage = (props: Props) => {
  let navigate = useNavigate()

  const signUp = async (values: UserData) => {
    await axios
      .post(
        'https://jobs-api-06-ivan.herokuapp.com/api/v1/auth/register',
        values
      )
      .then((response) => {
        console.log('response', response)
        localStorage.setItem('token', JSON.stringify(response.data.token))
        navigate('/main')
      })
      .catch((error) => console.log('error', error))
  }

  return (
    <div className="form-container">
      <PageTitle>Sign Up</PageTitle>

      <div>
        <Formik
          initialValues={{
            fullName: '',
            userName: '',
            email: '',
            password: '',
            confirmedPassword: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values, actions) => {
            console.log('values => ', values)
            signUp(values)
          }}
        >
          <Form>
            <TextInput
              name={'fullName'}
              id={'full-name-input'}
              label={'Full Name *'}
              placeholder={'Example Name'}
            />

            <TextInput
              name={'userName'}
              id={'user-name-input'}
              label={'User Name *'}
              placeholder={'Example123'}
            />

            <TextInput
              name={'email'}
              id={'email-input'}
              label={'Email *'}
              placeholder={'example@gmail.com'}
            />

            <PasswordInput
              name={'password'}
              id={'password-input'}
              label={'Password *'}
              placeholder={'***************'}
            />

            <PasswordInput
              name={'confirmedPassword'}
              id={'confirmed-password-input'}
              label={'Confirm Password *'}
              placeholder={'***************'}
            />

            <Button>Sign Up</Button>
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
