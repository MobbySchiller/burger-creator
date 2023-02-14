import { FC, useContext } from 'react'
import { CurrentBurgerContext } from '../../../pages/Home/Home'
import './SingleIngredient.scss'

type SingleIngredientProps = {
    ingredient: {
        name: string,
        value: string,
        img: any
    }
}

const SingleIngredient: FC<SingleIngredientProps> = ({ ingredient }) => {
    const { name, value, img } = ingredient

    const [currentBurger, dispatch] = useContext(CurrentBurgerContext)
    const { ingredients } = currentBurger

    const currentIngredientAmount = ingredients
        .filter(ingredient => ingredient === value)
        .length

    const handleRemove = () => {
        if (currentIngredientAmount === 0) return
        if (ingredients.length > 1 && value === 'bottomBun') return
        dispatch({ type: 'remove', payload: value })
    }

    const handleAdd = () => {
        if (isTopBunInBurger()) return
        if (ingredients.length === 8 && value !== 'topBun') return
        if (isBottomBunInBurger() && value === 'bottomBun') return
        if (ingredients.length === 0 && value !== 'bottomBun') return
        dispatch({ type: 'add', payload: value })
    }

    const isTopBunInBurger = () => {
        return ingredients.some(ingredient => ingredient === 'topBun')
    }

    const isBottomBunInBurger = () => {
        return ingredients.some(ingredient => ingredient === 'bottomBun')
    }

    return (
        <div className='ingredient'>
            <div className='ingredient-counter'>
                <button
                    className='ingredient-counter__btn ingredient-counter__btn--remove'
                    onClick={handleRemove}
                >-</button>
                <span>{currentIngredientAmount}</span>
                <button
                    className='ingredient-counter__btn ingredient-counter__btn--add'
                    onClick={handleAdd}
                >+</button>
            </div>
            <div className='ingredient-pic'>
                <img
                    src={img}
                    alt={`${name}-image`}
                    className='ingredient-pic__img'
                />
            </div>
            <span className='ingredient-name'>{name}</span>
        </div>
    )
}

export default SingleIngredient