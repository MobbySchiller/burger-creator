import React, { FC, useContext, Dispatch } from 'react'
import { CurrentBurgerContext } from '../../../pages/Home/Home'
import './SingleIngredient.scss'

type SingleIngredientProps = {
    ingredient: {
        name: string,
        value: string,
        img: any
    },
    setError: Dispatch<React.SetStateAction<string>>
}

const SingleIngredient: FC<SingleIngredientProps> = ({ ingredient, setError }) => {
    const { name, value, img } = ingredient

    const [currentBurger, dispatch] = useContext(CurrentBurgerContext)
    const { ingredients } = currentBurger

    const currentIngredientAmount = ingredients
        .filter(ingredient => ingredient === value)
        .length

    const handleRemove = () => {
        if (checkIfEmptyIngridients()) return
        if (checkAbilityToRemoveBottomBun()) {
            setError('You cannot remove the bottom bun while there is another product on it.')
            return
        }
        dispatch({ type: 'remove', payload: value })
        setError('')
    }

    const checkIfEmptyIngridients = () => currentIngredientAmount === 0
    const checkAbilityToRemoveBottomBun = () => ingredients.length > 1 && value === 'bottomBun'

    const handleAdd = () => {
        if (checkExistingTopBunInBurger()) {
            setError('Your burger is complete. You cannot add another ingredient.')
            return
        }
        if (checkLastItem()) {
            setError('The maximum number of items is 9 including buns. Last item must be top bun.')
            return
        }
        if (checkExistingBottomBunInBurger() && value === 'bottomBun') {
            setError('You cannot add another bottom bun.')
            return
        }
        if (checkFirstItem()) {
            setError('First item must be bottom bun')
            return
        }
        dispatch({ type: 'add', payload: value })
        setError('')
    }

    const checkExistingTopBunInBurger = () => ingredients.some(ingredient => ingredient === 'topBun')
    const checkLastItem = () => ingredients.length === 8 && value !== 'topBun'
    const checkExistingBottomBunInBurger = () => ingredients.some(ingredient => ingredient === 'bottomBun')
    const checkFirstItem = () => ingredients.length === 0 && value !== 'bottomBun'

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