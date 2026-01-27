import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'


//Test
import ChartLineDefault from './components/molecules/ChartLineDefault'
import StatisticsPage from './components/organisms/Side_statisticsPage'



function App() {
  return (

    // Quando se utiliza HashRouter o Router passa a reconhecer após o caractere # então utiliza-se #link
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<StatisticsPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App