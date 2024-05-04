import './index.scss'

export const DivContent = ({ children, className }) => {
  return <div className={`div-content ${className}`}>{children}</div>
}
