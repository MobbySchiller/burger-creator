import { FC, useContext } from 'react'
import { CurrentBurgerContext } from '../../context/BurgerCreatorContext'
import './CustomBurger.scss'


const CustomBurger: FC = () => {
    const [currentBurger] = useContext(CurrentBurgerContext)
    const { ingredients } = currentBurger

    const customBurgerIngredients = ingredients.map((ingredient, index) => (
        <div
            key={`${ingredient}-${index}`}
            className={`custom-burger__${ingredient}`}
        ></div>
    ))

    return (
        <div className='custom-burger'>
            {customBurgerIngredients}
        </div>
    )
}

export default CustomBurger