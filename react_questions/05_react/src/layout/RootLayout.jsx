import React from 'react'
import {Outlet, NavLink } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
         <nav>
             {/* NavLink automatically adds an "active" class when clicked */}
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/profile/petter-parker">Profile</NavLink>
            </nav>   

            <main>
                 {/* Child routes render right here */}
                <Outlet/>
            </main>
    </div>
  )
}

export default RootLayout
