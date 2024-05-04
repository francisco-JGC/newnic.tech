import './index.scss'

export const CButton = ({
  children,
  className,
  onClick,
  typeStyle = 'default-button',
}) => {
  typeStyle =
    typeStyle === 'default-button' || typeStyle === 'modern-button'
      ? typeStyle
      : 'default-button'

  return (
    <button className={`c-button ${className} ${typeStyle}`} onClick={onClick}>
      {children}
    </button>
  )
}
