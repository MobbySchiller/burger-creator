import React, { FC, Dispatch } from 'react'
import IngredientsList from '../../data/IngredientsList'
import SingleIngredient from './SingleIngredient/SingleIngredient'
import './Ingredients.scss'

type IngredientsProps = {
    setError: Dispatch<React.SetStateAction<string>>
    setIsBurgerComplete: Dispatch<React.SetStateAction<boolean>>
}

const Ingredients: FC<IngredientsProps> = ({ setError, setIsBurgerComplete }) => {

    const ingredients = IngredientsList.map(ingredient => {

        return (
            <SingleIngredient
                key={ingredient.value}
                ingredient={ingredient}
                setError={setError}
                setIsBurgerComplete={setIsBurgerComplete}
            />
        )
    })

    return (
        <section className='ingredients'>
            {ingredients}
        </section>
    )
}

export default Ingredients