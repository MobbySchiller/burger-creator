import { FC } from 'react'
import './CustomBurger.scss'

const CustomBurger: FC = () => {

    return (
        <section className='custom-burger'>
            <h2 className='custom-burger__title'>
                <span>Custom</span>
                <span>Burger</span>
            </h2>
        </section>
    )
}

export default CustomBurger