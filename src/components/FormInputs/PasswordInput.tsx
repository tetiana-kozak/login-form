import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material'
import { useState } from 'react'
import iconOff from 'assets/eye-off.svg'
import iconOn from 'assets/eye-on.svg'
import { useField } from 'formik'

type Props = {
  label: string
  id: string
  name: string
  placeholder: string
}

const PasswordInput = ({ label, id, ...props }: Props) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => setShowPassword((show) => !show)

  const [field, meta] = useField(props)

  return (
    <FormControl variant="standard" margin="normal" fullWidth>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        {...field}
        {...props}
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
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </FormControl>
  )
}
export default PasswordInput
