'use client'

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

export const NavLink = ({ href, children, target }) => {
  const { isActive } = useSelectedLayoutSegments({ href })

  return (
    <Link
      href={href}
      className={isActive ? 'active' : ''}
      passHref
      target={target}
    >
      {children}
    </Link>
  )
}
