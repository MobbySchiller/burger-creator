export type Ingredients = {
    bottomBun: number
    topBun: number
    tomato: number
    burger: number
    fish: number
    lettuce: number
    cheese: number
};

export interface InitialState {
    name: string
    ingredients: Ingredients
}

export interface NameAction {
    type: 'name'
    value: string
}

export interface IncrementAction {
    type: 'increment'
    ingredient: keyof Ingredients
}

export interface DecrementAction {
    type: 'decrement'
    ingredient: keyof Ingredients
}

export type Action = NameAction | IncrementAction | DecrementAction