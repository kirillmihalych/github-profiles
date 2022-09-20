import { Navbar } from './components'
import { HomePage } from './pages'
import { SinglePageProfile } from './features/profiles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profiles/:login' element={<SinglePageProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
