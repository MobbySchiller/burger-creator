export interface InitialState {
    ingredients: string[]
}

export interface Action {
    type: 'add' | 'remove'
    payload: string
}

