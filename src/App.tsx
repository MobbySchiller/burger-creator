import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Favourites from './pages/Favourites/Favourites'

const App: FC = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
