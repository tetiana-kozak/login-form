import PageTitle from 'components/Title/PageTitle'
import vectorImg from 'assets/Vector.svg'
import decor from 'assets/Decor.svg'
import 'pages/Pages.scss'
import Button from 'components/Button/Button'
import { Link } from 'react-router-dom'

type Props = {}
const MainPage = (props: Props) => {
  return (
    <>
      <div className="main-container horisontal-gap">
        <PageTitle>
          Congratulations
          <span
            className="decor"
            style={{ backgroundImage: `url(${decor})` }}
          ></span>
        </PageTitle>

        <p className="main-description">
          Now you are on the main page. Soon we will provide you with detailed
          feedback on the result of your work
        </p>

        <div>
          <Link to={'/sign-in'}>
            <Button>Log Out</Button>
          </Link>
        </div>
      </div>
      <img src={vectorImg} alt="Congratulations" className="image" />
    </>
  )
}
export default MainPage
