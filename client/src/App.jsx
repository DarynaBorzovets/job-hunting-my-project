import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Language from './components/Language'
import Arabic from './pages/Arabic'
import Dutch from './pages/Dutch'
import Korean from './pages/Korean'
import Russian from './pages/Russian'



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
    <Route path="/dutch" element={<Dutch />} />
    <Route path="/korean" element={<Korean/>} />
    <Route path="/russian" element={<Russian/>} />


    </Routes>
</Router>
  )
}

export default App
