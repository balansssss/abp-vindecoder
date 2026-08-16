import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header.jsx'
import { Main } from './pages/Main/Main.jsx'
import { Variables } from './pages/Variables/Variables.jsx'
import { Variable } from './pages/Variable/Variable.jsx'
import { useLoading } from './contexts/LoadingProvider.jsx'
import { VariablesProvider } from './contexts/VariablesProvider.jsx'

function App() {

  const {loading} = useLoading()

  return (
      <BrowserRouter>
        {loading && <div className="loading-overlay">Loading...</div>}
        <div className="app">
          <Header />
          <div className="page">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route element={<VariablesProvider />}>
                <Route path="/variables" element={<Variables />} />
                <Route path="/variables/:variableId" element={<Variable />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
