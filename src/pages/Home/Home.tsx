import { FC } from 'react'
import Ingredients from '../../components/Ingredients/Ingredients'
import CustomBurger from '../../components/CustomBurger/CustomBurger'
import './Home.scss'

const Home: FC = () => {
    return (
        <main className='home'>
            <Ingredients />
            <CustomBurger />
        </main>
    )
}

export default Home