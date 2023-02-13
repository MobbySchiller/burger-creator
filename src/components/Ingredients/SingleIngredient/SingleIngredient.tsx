import { FC, useContext } from 'react'
import { CurrentBurgerContext } from '../../../pages/Home/Home'
import { Ingredients } from '../../../types/Home'
import { IngredientKey } from '../../../types/SingleIngredients'
import './SingleIngredient.scss'

type SingleIngredientProps = {
    ingredient: {
        name: string,
        value: keyof Ingredients,
        img: any
    }
}

const SingleIngredient: FC<SingleIngredientProps> = ({ ingredient }) => {
    const { name, value, img } = ingredient

    const [currentBurger, dispatch] = useContext(CurrentBurgerContext)

    const currentValue = currentBurger.ingredients[value]

    const handleRemove = () => {
        if (currentValue === 0) return
        dispatch({ type: 'decrement', ingredient: value as IngredientKey })
    }

    const handleAdd = () => {
        dispatch({ type: 'increment', ingredient: value as IngredientKey })
    }


    return (
        <div className='ingredient'>
            <div className='ingredient-counter'>
                <button
                    className='ingredient-counter__btn ingredient-counter__btn--remove'
                    onClick={handleRemove}
                >-</button>
                <span>{currentValue}</span>
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