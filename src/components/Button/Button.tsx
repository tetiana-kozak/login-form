import './Button.scss'

type Props = { children: React.ReactNode }

const Button = ({ children }: Props) => {
  return (
    <button type="submit" className="button">
      {children}
    </button>
  )
}
export default Button
