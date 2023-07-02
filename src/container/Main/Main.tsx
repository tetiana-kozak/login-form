import { Container } from '@mui/material'
import MainRoutes from 'MainRoutes'

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
