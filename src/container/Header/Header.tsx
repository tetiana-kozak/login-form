import { Container } from '@mui/material'
import './Header.scss'

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <Container>
        <div className="header-logo">
          <h3 className="header-title">InCode</h3>
          <h5 className="header-subtitle">Finance</h5>
        </div>
      </Container>
    </header>
  )
}
export default Header
