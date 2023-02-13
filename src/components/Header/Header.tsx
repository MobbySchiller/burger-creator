import { FC } from 'react'
import Title from './Title/Title'
import Nav from './Nav/Nav'

const Header: FC = () => {
    return (
        <header>
            <Title />
            <Nav />
        </header>
    )
}

export default Header