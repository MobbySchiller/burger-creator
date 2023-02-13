import { FC, useReducer, createContext, Dispatch } from 'react'
import { InitialState, Action } from '../../types/Home'
import Ingredients from '../../components/Ingredients/Ingredients'
import Customization from '../../components/Customization/Customization'
import './Home.scss'


export const initialState: InitialState = {
    name: '',
    ingredients: []
}

export const CurrentBurgerContext = createContext<[InitialState, Dispatch<Action>]>([initialState, () => { }])

const reducer = (state = initialState, action: Action): InitialState => {
    switch (action.type) {
        case 'name':
            return {
                ...state,
                name: action.payload
            }
        case 'add':
            return {
                ...state,
                ingredients: [action.payload, ...state.ingredients]
            }
        case 'remove':
            const index = state.ingredients.lastIndexOf(action.payload)
            return {
                ...state,
                ingredients: [
                    ...state.ingredients.slice(0, index),
                    ...state.ingredients.slice(index + 1)
                ]
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