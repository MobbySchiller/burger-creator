import { FC, useContext } from 'react'
import { CurrentBurgerContext } from '../../pages/Home/Home'
import CustomBurger from '../CustomBurger/CustomBurger'
import './Customization.scss'

type CustomizationProps = {
    error: string,
    isBurgerComplete: boolean
}

const Customization: FC<CustomizationProps> = ({ error, isBurgerComplete }) => {
    const [currentBurger] = useContext(CurrentBurgerContext)
    const { ingredients } = currentBurger

    return (
        <section className='customization'>
            <div className='custimization__wrapper'>
                <h2 className='customization__title'>
                    <span>Custom</span>
                    <span>Burger</span>
                </h2>
                {error &&
                    <p className='customization__error'>{error}</p>
                }
                {!error &&
                    <p className='customization__start'>
                        {ingredients.length ?
                            ''
                            :
                            'Add items to create your burger. First item must be bottom bun. To finish your burger choose top bun'
                        }
                    </p>
                }
                <CustomBurger />
                {isBurgerComplete &&
                    <form
                        className='customization__form'
                    >
                        <input
                            type='text'
                            placeholder='Enter a name of burger' />
                        <button type='submit'>SAVE</button>
                    </form>
                }
            </div>
        </section >
    )
}

export default Customization