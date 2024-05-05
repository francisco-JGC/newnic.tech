import './index.scss'
import { TitleSection } from '../TitleSection'

export const SectionPage = ({
  title,
  description,
  small,
  children,
  className,
  showBackground = false,
  titleSize,
  id,
  positionTitle,
}) => {
  return (
    <div className={`section-page`} id={id}>
      <section className={`section-page-content ${className}`}>
        {showBackground && (
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        )}

        <TitleSection
          title={title}
          description={description}
          small={small}
          titleSize={titleSize}
          positionTitle={positionTitle}
        />
        {children}
      </section>
    </div>
  )
}
