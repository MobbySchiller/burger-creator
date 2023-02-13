import { FC } from 'react'
import CustomBurger from '../CustomBurger/CustomBurger'
import './Customization.scss'

const Customization: FC = () => {

    return (
        <section className='customization'>
            <h2 className='customization__title'>
                <span>Custom</span>
                <span>Burger</span>
            </h2>
            <CustomBurger />
        </section>
    )
}

export default Customization