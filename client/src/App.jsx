import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Language from './components/Language'

function App() {

  return (
  <Router>
    <div>
    <Navbar/>
    </div>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/project" element={<Language />} />

    </Routes>
</Router>
  )
}

export default App
