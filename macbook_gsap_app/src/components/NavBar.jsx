import React from 'react'
import { navLinks } from '../constants/index.js'

const NavBar = () => {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Apple logo" />

            <ul className='flex flex-1 justify-center items-center gap-10'>
                {navLinks.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                ))}
            </ul>

            <div className='flex-center gap-3'>
                <button>
                    <img src="/search.svg" alt="search" />
                </button>
                <button>
                    <img src="/cart.svg" alt="cart" />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default NavBar