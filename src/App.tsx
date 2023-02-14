import { FC, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { FavouriteBurger } from './types/App'
import Home from './pages/Home/Home'
import Favourites from './pages/Favourites/Favourites'
import { FavouriteBurgersContext } from './context/FavouriteBurgersContext'

const App: FC = () => {
  const [favouriteBurgers, setFavouriteBurgers] = useState<FavouriteBurger[]>([])

  return (
    <div className='wrapper'>
      <FavouriteBurgersContext.Provider value={{ favouriteBurgers, setFavouriteBurgers }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </FavouriteBurgersContext.Provider>
    </div>
  )
}

export default App
