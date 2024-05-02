'use client'

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

export const NavLink = ({ href, children }) => {
  const { isActive } = useSelectedLayoutSegments({ href })

  return (
    <Link href={href} className={isActive ? 'active' : ''} passHref>
      {children}
    </Link>
  )
}
