import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Favourites from './pages/Favourites/Favourites'

const App: FC = () => {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
    </div>
  )
}

export default App
