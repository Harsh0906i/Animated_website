import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <header>
            <NavLink to="/" className='w-10 h-10 rounded bg-white items-center justify-center flex font-bold shadow-md' >
                <p className='blue-gradient_text' >Ah</p>
            </NavLink >
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} > About</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} >Contact</NavLink>
            </nav>
        </header >
    )
}