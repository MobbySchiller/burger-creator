import { FC } from 'react'
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

    return (
        <div className='ingredient'>
            <div className='ingredient-counter'>
                <button className='ingredient-counter__btn ingredient-counter__btn--remove'>-</button>
                <span>0</span>
                <button className='ingredient-counter__btn ingredient-counter__btn--add'>+</button>
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