import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbariot() {
  return (
    <div className='flex justify-center gap-5 p-5 bg-blue-700 text-white'>
      <Link to="/PageA">หน้า A</Link>
      <Link to="/PageB">หน้า B</Link>
      <Link to="/PageC">หน้า C</Link>
      <Link to="/PageD">หน้า D</Link>
    </div>
  )
}
