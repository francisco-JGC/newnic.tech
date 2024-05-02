import './index.scss'
import { Navigation } from '../Navigation'
import newnicLogo from '@/assets/logo/newnicweb.webp'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Image src={newnicLogo} alt="Newnic Logo" />

        <section className="header-navigation">
          <Navigation />
        </section>
      </div>
    </header>
  )
}
