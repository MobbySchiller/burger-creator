import React, { FC, useState, useContext, useRef } from 'react'
import { CurrentBurgerContext } from '../../context/BurgerCreatorContext'
import CustomBurger from '../CustomBurger/CustomBurger'
import './Customization.scss'

const INPUT_REGEX = /^(?!\s+$).+/

type CustomizationProps = {
    error: string,
    isBurgerComplete: boolean
}

const Customization: FC<CustomizationProps> = ({ error, isBurgerComplete }) => {
    const [addAttemptError, setAddAttemptError] = useState<string>('')
    const [currentBurger] = useContext(CurrentBurgerContext)
    const { ingredients } = currentBurger
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const inputValue = inputRef.current?.value
        if (!inputValue?.match(INPUT_REGEX)) {
            setAddAttemptError('Name format not allowed.')
        } else {
            setAddAttemptError('')
        }
    }

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
                        onSubmit={handleSubmit}
                    >
                        <input
                            type='text'
                            placeholder='Enter a name of burger'
                            ref={inputRef}
                        />
                        <span>{addAttemptError}</span>
                        <button type='submit'>SAVE</button>
                    </form>
                }
            </div>
        </section >
    )
}

export default Customization