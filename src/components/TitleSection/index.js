import './index.scss'

export const TitleSection = ({ title, description, small }) => {
  return (
    <section className="title-section">
      <small className="title-section-small">{small}</small>
      <h1>{title}</h1>
      <p className="title-description">{description}</p>
    </section>
  )
}
