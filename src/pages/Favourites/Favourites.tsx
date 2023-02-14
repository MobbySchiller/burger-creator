import { FC } from 'react'
import Header from '../../components/Header/Header'
import './Favourites.scss'

const Favourites: FC = () => {
    return (
        <>
            <Header title={'Favourites Burgers'} />
            <main className='favourites'>
                <p className='favourites__message'>You don’t have any favourites burgers</p>
            </main>
        </>
    )
}

export default Favourites