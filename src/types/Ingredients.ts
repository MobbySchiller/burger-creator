import { Ingredients } from "./Home"

export type IngredientList = {
    name: string,
    value: keyof Ingredients,
    img: any
}