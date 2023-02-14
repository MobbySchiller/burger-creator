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
            style={{
                transform: `translateY(-${index * 2}0px)`,
                zIndex: `${100 - index}`
            }}
        ></div>
    ))

    return (
        <div className='custom-burger'>
            {customBurgerIngredients}
        </div>
    )
}

export default CustomBurger