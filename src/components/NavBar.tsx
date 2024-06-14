import React from 'react'

const NavBar = () => {
    return (
        <nav>
            <ul className='flex gap-4 bg-slate-900 text-white h-16 items-center'>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
        </nav>
    )
}

export default NavBar