import { FC, useEffect, useContext } from 'react'
import { FavouriteBurgersContext } from '../../context/FavouriteBurgersContext'
import Header from '../../components/Header/Header'
import './Favourites.scss'

const Favourites: FC = () => {
    const { favouriteBurgers } = useContext(FavouriteBurgersContext)

    // useEffect(() => {

    // }, [favouriteBurgers])

    const burgersToDisplay = favouriteBurgers.map(burger => (
        <div key={burger.name}>
            <p>{burger.name}</p>
        </div>
    ))

    return (
        <>
            <Header title={'Favourites Burgers'} />
            <main className='favourites'>
                {!favouriteBurgers.length &&
                    <p className='favourites__message'>You don’t have any favourites burgers</p>
                }
                {burgersToDisplay}
            </main>
        </>
    )
}

export default Favourites