import { FC } from 'react'
import Ingredients from '../../components/Ingredients/Ingredients'
import Customization from '../../components/Customization/Customization'
import './Home.scss'

const Home: FC = () => {
    return (
        <main className='home'>
            <Ingredients />
            <Customization />
        </main>
    )
}

export default Home