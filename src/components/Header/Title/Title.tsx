import { FC } from 'react'
import './Title.scss'

type TitleProps = {
    name: string
}

const Title: FC<TitleProps> = ({ name }) => {

    return (
        <h1 className='title'>
            {name}
        </h1>
    )
}

export default Title