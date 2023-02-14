import { FC, useContext } from 'react'
import { FavouriteBurgersContext } from '../../context/FavouriteBurgersContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/Header/Header'
import FavouriteBurgerPreview from '../../components/FavouriteBurgerPreview/FavouriteBurgerPreview'
import './Favourites.scss'

const Favourites: FC = () => {
    const { favouriteBurgers } = useContext(FavouriteBurgersContext)

    const burgersToDisplay = favouriteBurgers.map(burger => (
        <div
            key={burger.name}
            className='burger-preview'
        >
            <FavouriteBurgerPreview ingredients={burger.ingredients} />
            <p className='burger-preview__name'>{burger.name}</p>
            <button className='burger-preview__button'>
                <FontAwesomeIcon
                    icon={faTrash}
                    className='burger-preview__button-icon'
                />
                Remove
            </button>
        </div>
    ))

    return (
        <>
            <Header title={'Favourites Burgers'} />
            <main className='favourites'>
                {!favouriteBurgers.length &&
                    <p className='favourites__message'>You don’t have any favourites burgers</p>
                }
                <div className='favourites__burgers'>
                    {burgersToDisplay}
                </div>
            </main>
        </>
    )
}

export default Favourites