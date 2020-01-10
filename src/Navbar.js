import React from 'react'
import { Link } from '@reach/router'

export default function Navbar() {
  return (
    <nav className='NavBar'>
      <Link to='CurrentStudents'>
        <button>currentStudents</button>
      </Link>
      <button>Graduates</button>
    </nav>
  )
}
