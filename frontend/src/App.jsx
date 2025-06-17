import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import Guide from './pages/Guide.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/guide/:guideId" element={<Guide />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
