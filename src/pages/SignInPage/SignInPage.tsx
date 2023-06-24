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

type Props = {}

const SignInPage = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event', event.target.value)
  }

  return (
    <>
      <PageTitle>Sign In</PageTitle>

      <div>
        <form action="">
          <FormControl variant="standard" margin="normal" fullWidth>
            <InputLabel htmlFor="name-input">User Name</InputLabel>
            <Input
              id="name-input"
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
                    onClick={handleClickShowPassword}
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

          <Button>Sign In</Button>
        </form>
        <p className="account-message">
          Don’t have account yet? <span>New Account</span>
        </p>
      </div>
    </>
  )
}
export default SignInPage
