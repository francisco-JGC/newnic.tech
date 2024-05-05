'use client'
import './index.scss'
import { Navigation } from '../Navigation'
import newnicLogo from '@/assets/logo/newnicweb.webp'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import menuLinesIcon from '@/assets/icons/menu-lines.svg'
import { NavLink } from '../Navigation/navLink'

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const headerRef = useRef(null)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let lastScrollTop = 0

      const handleScroll = () => {
        const header = headerRef.current
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop

        if (scrollTop > lastScrollTop) {
          header?.classList.add('header-container--hide')
        } else {
          header?.classList.remove('header-container--hide')
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

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
