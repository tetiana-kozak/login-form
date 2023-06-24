import { Container } from '@mui/material'
import SignInPage from 'pages/SignInPage/SignInPage'

type Props = {}

const Main = (props: Props) => {
  return (
    <main className="main">
      <Container className="container">
        <SignInPage />
      </Container>
    </main>
  )
}
export default Main
