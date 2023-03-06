import { FC } from 'react'
import './FavouriteBurgerPreview.scss'

type FavouriteBurgerPreviewProps = {
    ingredients: string[]
}

const FavouriteBurgerPreview: FC<FavouriteBurgerPreviewProps> = ({ ingredients }) => {

    const favouriteBurgerIngredients = ingredients.map((ingredient, index) => (
        <div
            key={`${ingredient}-${index}`}
            className={`favourite-burger__${ingredient}`}
        >
        </div>
    ))

    return (
        <div className='favourite-burger'>
            {favouriteBurgerIngredients}
        </div>
    )
}

export default FavouriteBurgerPreview