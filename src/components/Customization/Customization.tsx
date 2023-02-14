import React, { FC, useState, useContext, useRef, Dispatch } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { CurrentBurgerContext } from '../../context/BurgerCreatorContext'
import CustomBurger from '../CustomBurger/CustomBurger'
import './Customization.scss'

const INPUT_REGEX = /^(?!\s+$).+/

type CustomizationProps = {
    error: string,
    isBurgerComplete: boolean
    setIsBurgerComplete: Dispatch<React.SetStateAction<boolean>>
}

const Customization: FC<CustomizationProps> = ({ error, isBurgerComplete, setIsBurgerComplete }) => {
    const [addAttemptError, setAddAttemptError] = useState<string>('')
    const [isBurgerAdded, setIsBurgerAdded] = useState<boolean>(false)
    const [currentBurger, dispatch] = useContext(CurrentBurgerContext)
    const { ingredients } = currentBurger
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const inputValue = inputRef.current?.value
        if (!inputValue?.match(INPUT_REGEX)) {
            setAddAttemptError('Name format not allowed.')
        } else {
            setAddAttemptError('')
            setName(inputValue)
        }
    }

    const setName = (name: string) => {
        if (checkNameAvailability(name)) {
            setAddAttemptError('Name taken')
            return
        }
        const newBurger = {
            name,
            ingredients: currentBurger.ingredients
        }
        localStorage.setItem(name, JSON.stringify(newBurger))
        setIsBurgerAdded(true)
        setIsBurgerComplete(false)
        setTimeout(() => setIsBurgerAdded(false), 2000)
        dispatch({ type: 'reset', payload: '' })
    }

    const checkNameAvailability = (name: string) => {
        return localStorage.getItem(name)
    }

    return (
        <section className='customization'>
            <div className='custimization__wrapper'>
                <h2 className='customization__title'>
                    <span>Custom</span>
                    <span>Burger</span>
                </h2>
                {isBurgerAdded ?
                    <p className='customization__success'>
                        Burger saved successfully
                        <FontAwesomeIcon
                            icon={faCheck}
                            className='customization__success-icon'
                        />
                    </p>
                    :
                    <div>
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
                }
            </div>
        </section >
    )
}

export default Customization