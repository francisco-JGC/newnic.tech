import './index.scss'

export const TitleSection = ({
  title,
  description,
  small,
  titleSize = 'h3',
  positionTitle = 'center',
}) => {
  const POSITIONS_TITLE = {
    center: {
      textAlign: 'center',
      alignItems: 'center',
    },
    left: {
      textAlign: 'left',
      alignItems: 'flex-start',
    },
    right: {
      textAlign: 'right',
      alignItems: 'flex-end',
    },
  }

  return (
    <section
      className="title-section"
      style={{
        ...POSITIONS_TITLE[positionTitle],
      }}
    >
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
