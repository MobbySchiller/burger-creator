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

    const currentValue = currentBurger.ingredients
        .filter(ingredient => ingredient === value)
        .length


    const handleRemove = () => {
        if (currentValue === 0) return
        dispatch({ type: 'remove', payload: value })
    }

    const handleAdd = () => {
        dispatch({ type: 'add', payload: value })
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