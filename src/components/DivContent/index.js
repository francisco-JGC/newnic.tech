import './index.scss'

export const DivContent = ({ children, className, style }) => {
  return (
    <div className={`div-content ${className}`} style={style}>
      {children}
    </div>
  )
}
