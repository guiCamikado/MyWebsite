import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home'

//Temp
import RegisterPage from './components/temp/RegisterPage'

function App() {
  return (

    // Quando se utiliza HashRouter o Router passa a reconhecer após o caractere # então utiliza-se #link
    <HashRouter>
      <Routes>
        <Route path="/test" element={<RegisterPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App