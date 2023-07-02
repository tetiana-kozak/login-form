import { useState } from 'react'
import PageTitle from 'components/Title/PageTitle'
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from '@mui/material'
import 'pages/Pages.scss'
import Button from 'components/Button/Button'
import iconOff from 'assets/eye-off.svg'
import iconOn from 'assets/eye-on.svg'
import { Link } from 'react-router-dom'

type Props = {}

const SignInPage = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => setShowPassword((show) => !show)

  const handleFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event', event.target.value)
  }

  return (
    <div className="form-container">
      <PageTitle>Sign In</PageTitle>

      <div>
        <form action="">
          <FormControl variant="standard" margin="normal" fullWidth>
            <InputLabel htmlFor="user-name-input">User Name</InputLabel>
            <Input
              id="user-name-input"
              placeholder="Example123"
              onChange={handleFormData}
              type="text"
            />
          </FormControl>

          <FormControl variant="standard" margin="normal" fullWidth>
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <Input
              id="password-input"
              placeholder="***************"
              onChange={handleFormData}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? (
                      <img src={iconOff} alt="" />
                    ) : (
                      <img src={iconOn} alt="" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Link to={'/main'}>
            <Button>Sign In</Button>
          </Link>
        </form>
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
