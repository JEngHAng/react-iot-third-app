import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageA from './pages/PageA.jsx'
import PageB from './pages/PageB.jsx'
import PageC from './pages/PageC.jsx'
import PageD from './pages/PageD.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageA />} />
        <Route path="/PageA" element={<PageA />} />
        <Route path="/PageB" element={<PageB />} />
        <Route path="/PageC" element={<PageC />} />
        <Route path="/PageD" element={<PageD />} />
      </Routes>
    </BrowserRouter>
  )
}
