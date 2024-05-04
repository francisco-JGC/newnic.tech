import './index.scss'

import { TitleSection } from '../TitleSection'
import Image from 'next/image'
import backgroundBlock from '@/assets/images/background-section.webp'
export const SectionPage = ({
  title,
  description,
  small,
  children,
  className,
  showBackground = false,
  titleSize,
}) => {
  return (
    <div className={`section-page`}>
      <section className={`section-page-content ${className}`}>
        {showBackground && (
          <div className="section-page-background">
            <Image src={backgroundBlock} alt={title} />
          </div>
        )}
        <TitleSection
          title={title}
          description={description}
          small={small}
          titleSize={titleSize}
        />
        {children}
      </section>
    </div>
  )
}
