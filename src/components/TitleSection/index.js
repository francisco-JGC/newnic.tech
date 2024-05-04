import './index.scss'

export const TitleSection = ({
  title,
  description,
  small,
  titleSize = 'h3',
}) => {
  return (
    <section className="title-section">
      <small className="title-section-small">{small}</small>
      {titleSize === 'h1' ? (
        <h1
          style={{
            fontSize: '2em',
          }}
        >
          {title}
        </h1>
      ) : (
        <h2
          style={{
            fontSize: '1.4em',
          }}
        >
          {title}
        </h2>
      )}
      <p className="title-description">{description}</p>
    </section>
  )
}
