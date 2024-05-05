'use client'
import './index.scss'
import { Navigation } from '../Navigation'
import newnicLogo from '@/assets/logo/newnicweb.webp'
import Image from 'next/image'
import { useState, useRef } from 'react'
import menuLinesIcon from '@/assets/icons/menu-lines.svg'
import { NavLink } from '../Navigation/navLink'

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(true)
  const headerRef = useRef(null)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  let lastScrollTop = 0

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        <div className="logo-container">
          <NavLink href="/">
            <Image src={newnicLogo} alt="Newnic Logo" />
          </NavLink>
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
