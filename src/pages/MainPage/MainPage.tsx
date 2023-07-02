import PageTitle from 'components/Title/PageTitle'
import vectorImg from 'assets/Vector.svg'
import decor from 'assets/Decor.svg'
import 'pages/Pages.scss'
import { useNavigate } from 'react-router-dom'

type Props = {}
const MainPage = (props: Props) => {
  let navigate = useNavigate()

  const logOut = () => {
    navigate('/sign-in')
    localStorage.removeItem('token')
  }

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
          <button className="button" onClick={logOut}>
            Log Out
          </button>
        </div>
      </div>
      <img src={vectorImg} alt="Congratulations" className="image" />
    </>
  )
}
export default MainPage
