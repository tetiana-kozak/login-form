import * as Yup from 'yup'

const passwordRulles = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const SignUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, 'This field must have 5-20 characters!')
    .max(20, 'This field must have 5-20 characters!')
    .required('This field is required!'),
  userName: Yup.string()
    .min(5, 'This field must have 5-20 characters!')
    .max(20, 'This field must have 5-20 characters!')
    .required('This field is required!'),
  password: Yup.string()
    .min(5, 'Password must have minimum 5 characters!')
    .matches(passwordRulles, {
      message: 'Please, create a stronger password!',
    })
    .required('This field is required!'),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match!')
    .required('This field is required!'),
})

export const SignInSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'This field must have 2-20 characters!')
    .max(20, 'This field must have 2-20 characters!')
    .required('This field is required!'),
  password: Yup.string()
    .min(5, 'Password must have minimum 5 characters!')
    .matches(passwordRulles, {
      message: 'Please, create a stronger password',
    })
    .required('This field is required!'),
})
