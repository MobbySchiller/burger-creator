export interface InitialState {
    name: string
    ingredients: string[]
}

export interface Action {
    type: 'name' | 'add' | 'remove'
    payload: string
}

