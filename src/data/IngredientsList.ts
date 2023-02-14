import { IngredientList } from '../types/Ingredients'
import bottomBunImg from '../assets/bottom-bun.png'
import topBunImg from '../assets/top-bun.png'
import tomatoImg from '../assets/tomato.png'
import burgerImg from '../assets/ingredient-burger.png'
import fishImg from '../assets/ingredient-fish.png'
import lettuceImg from '../assets/lettuce.png'
import cheeseImg from '../assets/ingredient-cheese.png'

const IngredientsList: IngredientList[] = [
    {
        name: 'bottom bun',
        value: 'bottomBun',
        img: bottomBunImg
    },
    {
        name: 'top bun',
        value: 'topBun',
        img: topBunImg
    },
    {
        name: 'tomato',
        value: 'tomato',
        img: tomatoImg
    },
    {
        name: 'meat',
        value: 'burger',
        img: burgerImg
    },
    {
        name: 'fish',
        value: 'fish',
        img: fishImg
    },
    {
        name: 'lettuce',
        value: 'lettuce',
        img: lettuceImg
    },
    {
        name: 'cheese',
        value: 'cheese',
        img: cheeseImg
    }
]

export default IngredientsList