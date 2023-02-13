import { FC } from 'react'
import IngredientsList from '../../data/IngredientsList'
import SingleIngredient from './SingleIngredient/SingleIngredient'
import './Ingredients.scss'

const Ingredients: FC = () => {

    const ingredients = IngredientsList.map(ingredient => {

        return (
            <SingleIngredient key={ingredient.value} ingredient={ingredient} />
        )
    })

    return (
        <section>
            {ingredients}
        </section>
    )
}

export default Ingredients