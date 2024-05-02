import './index.scss'
import { NAVLINK_MENU_LIST } from './navList'
import { NavLink } from './navLink'

export const Navigation = () => {
  return (
    <nav className="navigation-menu">
      <ul className="navigation-menu-list">
        {NAVLINK_MENU_LIST.map((navItem, index) => (
          <li key={index} className="navigation-menu-item">
            <NavLink href={navItem.href} segment={navItem.segment}>
              {navItem.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
