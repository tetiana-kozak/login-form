import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from 'utils/localStorage'
import { SignInUserData, SignUpUserData } from 'utils/types'

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage,
}

let navigate = useNavigate()

const customAxios = axios.create({
  baseURL: 'https://jobs-api-06-ivan.herokuapp.com/api/v1',
})

const signUp = async (values: SignUpUserData) => {
  await customAxios
    .post('/auth/register', values)
    .then((response) => {
      const token = response.data.token
      addUserToLocalStorage(token)
      navigate('/main')
    })
    .catch((error) => console.log('error', error))
}

const signIn = async (values: SignInUserData) => {
  await customAxios
    .post('/auth/login', values)
    .then((response) => {
      const token = response.data.token
      if (token) {
        addUserToLocalStorage(token)
        navigate('/main')
      }
    })
    .catch((error) => console.log('error', error))
}

const logOut = () => {
  navigate('/sign-in')
  removeUserFromLocalStorage()
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {},
})

export default userSlice.reducer
