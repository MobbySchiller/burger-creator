import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faHeart } from '@fortawesome/free-solid-svg-icons'
import './Nav.scss'

type Link = {
    name: string,
    path: string,
    icon: IconProp
}

const Nav: FC = () => {

    const links: Link[] = [
        {
            name: 'home',
            path: '/',
            icon: faHouse
        },
        {
            name: 'favourites',
            path: '/favourites',
            icon: faHeart
        }
    ]

    const routes: JSX.Element[] = links.map(link => (
        <NavLink to={link.path}>
            <div className='navigation__link'>
                <FontAwesomeIcon icon={link.icon} />
            </div>
        </NavLink >
    ))

    return (
        <nav className='navigation'>
            {routes}
        </nav>
    )
}

export default Nav