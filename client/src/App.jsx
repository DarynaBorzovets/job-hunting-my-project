import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

function App() {

  return (
  <Router>
    <div>
    <Navbar/>
    </div>
    <Routes>
    <Route path="/" element={<HomePage />} />
    </Routes>
</Router>
  )
}

export default App
