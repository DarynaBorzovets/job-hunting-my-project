import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Language from './components/Language'
import Arabic from './pages/Arabic'

function App() {

  return (
  <Router>
    <div>
    <Navbar/>
    </div>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/project" element={<Language />} />
    <Route path="/arabic" element={<Arabic />} />


    </Routes>
</Router>
  )
}

export default App
