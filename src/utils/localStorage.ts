export const addUserToLocalStorage = (token: string) => {
  localStorage.setItem('token', JSON.stringify(token))
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('token')
}

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('token')
  const user = result ? JSON.parse(result) : null
  return user
}
