import './index.scss'

import { TitleSection } from '../TitleSection'
export const SectionPage = ({
  title,
  description,
  small,
  children,
  className,
}) => {
  return (
    <div className={`section-page`}>
      <section className={`section-page-content ${className}`}>
        <TitleSection title={title} description={description} small={small} />
        {children}
      </section>
    </div>
  )
}
