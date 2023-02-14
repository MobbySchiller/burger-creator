import { FC, useContext } from 'react'
import { CurrentBurgerContext } from '../../pages/Home/Home'
import CustomBurger from '../CustomBurger/CustomBurger'
import './Customization.scss'

type CustomizationProps = {
    error: string
}

const Customization: FC<CustomizationProps> = ({ error }) => {
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
                <CustomBurger />
                {!error &&
                    <p className='customization__start'>
                        {ingredients.length ?
                            ''
                            :
                            'Add items to create your burger. First item must be bottom bun. To finish your burger choose top bun'
                        }
                    </p>
                }
            </div>
        </section >
    )
}

export default Customization