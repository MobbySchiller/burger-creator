import { FC, useContext, useEffect } from 'react'
import { FavouriteBurgersContext } from '../../context/FavouriteBurgersContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/Header/Header'
import FavouriteBurgerPreview from '../../components/FavouriteBurgerPreview/FavouriteBurgerPreview'
import './Favourites.scss'

const Favourites: FC = () => {
    const { favouriteBurgers, setFavouriteBurgers } = useContext(FavouriteBurgersContext)

    useEffect(() => {
        const favouriteBurgers = localStorage.getItem('burgerCreator')
        if (favouriteBurgers) {
            setFavouriteBurgers(JSON.parse(favouriteBurgers))
        }
    })

    const burgersToDisplay = favouriteBurgers.map(burger => {
        const { name, ingredients } = burger

        const handleRemove = () => {
            const newFavouriteBurgers = favouriteBurgers.filter(burger => burger.name !== name)
            localStorage.setItem('burgerCreator', JSON.stringify(newFavouriteBurgers))
        }

        return (
            <div
                key={name}
                className='burger-preview'
            >
                <FavouriteBurgerPreview ingredients={ingredients} />
                <p className='burger-preview__name'>{name}</p>
                <button
                    className='burger-preview__button'
                    onClick={handleRemove}
                >
                    <FontAwesomeIcon
                        icon={faTrash}
                        className='burger-preview__button-icon'
                    />
                    Remove
                </button>
            </div>
        )
    })

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