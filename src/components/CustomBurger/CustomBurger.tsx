import { FC } from 'react'
import './CustomBurger.scss'


const CustomBurger: FC = () => {

    return (
        <div className='custom-burger'>
            <div className='custom-burger__top-bun'></div>
            <div className='custom-burger__tomato'></div>
            <div className='custom-burger__cheese'></div>
            <div className='custom-burger__burger'></div>
            <div className='custom-burger__fish'></div>
            <div className='custom-burger__lettuce'></div>
            <div className='custom-burger__bottom-bun'></div>
        </div>
    )
}

export default CustomBurger