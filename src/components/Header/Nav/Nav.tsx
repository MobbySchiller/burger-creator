import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '../../../types/Nav'
import { faHouse, faHeart } from '@fortawesome/free-solid-svg-icons'
import './Nav.scss'

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

    const navButtons: JSX.Element[] = links.map(link => (
        <NavLink to={link.path}>
            <button className='navigation__button'>
                <FontAwesomeIcon icon={link.icon} />
            </button>
        </NavLink >
    ))

    return (
        <nav className='navigation'>
            {navButtons}
        </nav>
    )
}

export default Nav