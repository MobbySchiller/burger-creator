import { FC, useState, useReducer } from 'react'
import { InitialState, Action } from '../../types/Home'
import { CurrentBurgerContext, initialState } from '../../context/BurgerCreatorContext'
import Ingredients from '../../components/Ingredients/Ingredients'
import Customization from '../../components/Customization/Customization'
import Header from '../../components/Header/Header'
import './Home.scss'


const reducer = (state = initialState, action: Action): InitialState => {
    switch (action.type) {
        case 'add':
            return {
                ingredients: [action.payload, ...state.ingredients]
            }
        case 'remove':
            const index = state.ingredients.lastIndexOf(action.payload)
            return {
                ingredients: [
                    ...state.ingredients.slice(0, index),
                    ...state.ingredients.slice(index + 1)
                ]
            }
        case 'reset':
            return {
                ingredients: []
            }
        default:
            return state
    }
}

const Home: FC = () => {
    const [currentBurger, dispatch] = useReducer(reducer, initialState)
    const [error, setError] = useState<string>('')
    const [isBurgerComplete, setIsBurgerComplete] = useState<boolean>(false)

    return (
        <>
            <Header title={'Burger Creator'} />
            <CurrentBurgerContext.Provider value={[currentBurger, dispatch]}>
                <main className='home'>
                    <Ingredients
                        setError={setError}
                        setIsBurgerComplete={setIsBurgerComplete}
                    />
                    <Customization
                        error={error}
                        isBurgerComplete={isBurgerComplete}
                        setIsBurgerComplete={setIsBurgerComplete}
                    />
                </main>
            </CurrentBurgerContext.Provider >
        </>
    )
}

export default Home