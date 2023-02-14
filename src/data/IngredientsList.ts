import { IngredientList } from '../types/Ingredients'
import bottomBunImg from '../assets/pictures/bottom-bun.png'
import topBunImg from '../assets/pictures/top-bun.png'
import tomatoImg from '../assets/pictures/tomato.png'
import burgerImg from '../assets/pictures/ingredient-burger.png'
import fishImg from '../assets/pictures/ingredient-fish.png'
import lettuceImg from '../assets/pictures/lettuce.png'
import cheeseImg from '../assets/pictures/ingredient-cheese.png'

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