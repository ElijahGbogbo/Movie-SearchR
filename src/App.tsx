import './css/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Favorites from './pages/Favorites'
import type { JSX } from 'react'
import { MovieProvider } from "./contexts/MovieContext.tsx";

function App(): JSX.Element {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
