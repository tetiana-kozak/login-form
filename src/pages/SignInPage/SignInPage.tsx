import PageTitle from 'components/Title/PageTitle'
import 'pages/Pages.scss'
import Button from 'components/Button/Button'
import { Link } from 'react-router-dom'
import TextInput from 'components/FormInputs/TextInput'
import { Formik, Form } from 'formik'
import PasswordInput from 'components/FormInputs/PasswordInput'
import { SignInSchema } from 'Schemas/schemas'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type Props = {}

type UserData = {
  email: string
  password: string
}

const SignInPage = (props: Props) => {
  let navigate = useNavigate()

  const signIn = async (values: UserData) => {
    await axios
      .post('https://jobs-api-06-ivan.herokuapp.com/api/v1/auth/login', values)
      .then((response) => {
        console.log('response login ', response)
        if (response.data.token) {
          localStorage.setItem('token', JSON.stringify(response.data.token))
          navigate('/main')
        }
      })
      .catch((error) => console.log('error', error))
  }
  return (
    <div className="form-container">
      <PageTitle>Sign In</PageTitle>

      <div>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignInSchema}
          onSubmit={(values) => {
            console.log(values)
            signIn(values)
          }}
        >
          <Form>
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

            <Button>Sign In</Button>
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
