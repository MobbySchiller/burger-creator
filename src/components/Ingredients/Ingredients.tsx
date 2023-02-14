import React, { FC, Dispatch } from 'react'
import IngredientsList from '../../data/IngredientsList'
import SingleIngredient from './SingleIngredient/SingleIngredient'
import './Ingredients.scss'

type IngredientsProps = {
    setError: Dispatch<React.SetStateAction<string>>
}

const Ingredients: FC<IngredientsProps> = ({ setError }) => {

    const ingredients = IngredientsList.map(ingredient => {

        return (
            <SingleIngredient key={ingredient.value} ingredient={ingredient} setError={setError} />
        )
    })

    return (
        <section className='ingredients'>
            {ingredients}
        </section>
    )
}

export default Ingredients