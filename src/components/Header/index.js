'use client'
import './index.scss'
import { Navigation } from '../Navigation'
import newnicLogo from '@/assets/logo/newnicweb.webp'
import Image from 'next/image'
import { useState } from 'react'
import menuLinesIcon from '@/assets/icons/menu-lines.svg'

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(true)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Image src={newnicLogo} alt="Newnic Logo" />
        </div>

        <section className={`header-navigation ${openMenu ? 'open' : ''}`}>
          <Navigation />
        </section>

        <div className="menu-mobile" onClick={handleOpenMenu}>
          <Image src={menuLinesIcon} alt="Menu Icon" />

          {openMenu && (
            <div className="menu-mobile-overlay" onClick={handleOpenMenu}>
              <Navigation />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
