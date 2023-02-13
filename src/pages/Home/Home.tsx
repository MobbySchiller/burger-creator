import { FC, useReducer, createContext, Dispatch } from 'react'
import { InitialState, Action } from '../../types/Home'
import Ingredients from '../../components/Ingredients/Ingredients'
import Customization from '../../components/Customization/Customization'
import './Home.scss'


export const initialState: InitialState = {
    name: '',
    ingredients: {
        bottomBun: 0,
        topBun: 0,
        tomato: 0,
        burger: 0,
        fish: 0,
        lettuce: 0,
        cheese: 0
    }
}

export const CurrentBurgerContext = createContext<[InitialState, Dispatch<Action>]>([initialState, () => { }])

const reducer = (state = initialState, action: Action): InitialState => {
    switch (action.type) {
        case 'name':
            return {
                ...state,
                name: action.value
            }
        case 'increment':
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] + 1
                }
            }
        case 'decrement':
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] - 1
                }
            }
        default:
            return state
    }
}

const Home: FC = () => {
    const [currentBurger, dispatch] = useReducer(reducer, initialState)

    return (
        <CurrentBurgerContext.Provider value={[currentBurger, dispatch]}>
            <main className='home'>
                <Ingredients />
                <Customization />
            </main>
        </CurrentBurgerContext.Provider >
    )
}

export default Home