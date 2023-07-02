import { Container } from '@mui/material'
import MainRoutes from 'MainRoutes'
import MainPage from 'pages/MainPage/MainPage'
import SignInPage from 'pages/SignInPage/SignInPage'
import SignUpPage from 'pages/SignUpPage/SignUpPage'

type Props = {}

const Main = (props: Props) => {
  return (
    <main className="main">
      <Container className="container">
        <MainRoutes />
      </Container>
    </main>
  )
}
export default Main
