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

const SignUpPage = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false)

  const handleShowPassword = () => setShowPassword((show) => !show)
  const handleConfirmedShowPassword = () =>
    setShowConfirmedPassword((show) => !show)

  const handleFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event', event.target.value)
  }
  return (
    <>
      <PageTitle>Sign Up</PageTitle>

      <div>
        <form action="">
          <FormControl variant="standard" margin="normal" fullWidth>
            <InputLabel htmlFor="full-name-input">Full Name</InputLabel>
            <Input
              id="full-name-input"
              placeholder="Example Name"
              onChange={handleFormData}
              type="text"
            />
          </FormControl>

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

          <FormControl variant="standard" margin="normal" fullWidth>
            <InputLabel htmlFor="confirm-password-input">
              Confirm Password
            </InputLabel>
            <Input
              id="confirm-password-input"
              placeholder="***************"
              onChange={handleFormData}
              type={showConfirmedPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleConfirmedShowPassword}
                  >
                    {showConfirmedPassword ? (
                      <img src={iconOff} alt="" />
                    ) : (
                      <img src={iconOn} alt="" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button>Sign Up</Button>
        </form>
        <p className="account-message">
          I have an account. <span>Go to Sign in</span>
        </p>
      </div>
    </>
  )
}
export default SignUpPage
