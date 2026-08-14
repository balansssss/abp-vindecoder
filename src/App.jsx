import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header.jsx'
import { Main } from './pages/Main/Main.jsx'
import { Variables } from './pages/Variables/Variables.jsx'
import { Variable } from './pages/Variable/Variable.jsx'
import { useState, createContext } from 'react'

export const LoadingContext = createContext()

function App() {

  const [loading, setLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <BrowserRouter>
        {loading && <div className="loading-overlay">Loading...</div>}
        <div className="app">
          <Header />
          <div className="page">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/variables" element={<Variables />} />
              <Route path="/variables/:variableId" element={<Variable />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </LoadingContext.Provider>
  )
}

export default App
