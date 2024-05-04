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
}) => {
  return (
    <div className={`section-page`}>
      <section className={`section-page-content ${className}`}>
        <div className="section-page-background">
          <Image src={backgroundBlock} alt={title} />
        </div>
        <TitleSection title={title} description={description} small={small} />
        {children}
      </section>
    </div>
  )
}
