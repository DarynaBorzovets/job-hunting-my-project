import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Language from './components/Language'
import Arabic from './pages/Arabic'
import Dutch from './pages/Dutch'
import Korean from './pages/Korean'
import Russian from './pages/Russian'
import Vietnamese from './pages/Vietnamese'
import Chinese from './pages/Chinese'



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
    <Route path="/vietnamese" element={<Vietnamese/>} />
    <Route path="/chinese" element={<Chinese/>} />


    </Routes>
</Router>
  )
}

export default App
