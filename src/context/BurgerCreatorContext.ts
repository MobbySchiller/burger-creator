import { createContext, Dispatch } from 'react'
import { InitialState, Action } from '../types/Home'

export const initialState: InitialState = {
    ingredients: []
}

export const CurrentBurgerContext = createContext<[InitialState, Dispatch<Action>]>([initialState, () => { }])