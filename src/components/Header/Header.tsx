import { FC } from 'react'
import Title from './Title/Title'
import Nav from './Nav/Nav'

type HeaderProps = {
    title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
    return (
        <header>
            <Title name={title} />
            <Nav />
        </header>
    )
}

export default Header