import React, { useState } from 'react'
import { Navlinks } from '../constants/Navlinks'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Navbar() {
  const [open, setOpen] = useState(false)
  const token = localStorage.getItem("token")
  const nav = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    toast.success("Logout successful")
    nav('/login')

  }

  return (
    <nav className='bg-blue-500 text-white font-bold fixed w-full z-1'>

      <div className='flex justify-between p-4'>

        <NavLink to="/" className="flex lg:flex-row flex-col gap-2 items-center">
          <img src="https://i.pinimg.com/736x/31/14/5e/31145e7925e59e8fb344f13422435dba.jpg" alt="todo" className='lg:h-8 h-6 ' />
          <h1 className='text-sm lg:text-xl'>Todo App</h1>
        </NavLink>
        <button onClick={() => setOpen(!open)} className='sm:hidden relative left-45 h-10 bg-white text-black px-3'>{open ? "X" : "="}</button>
        <ul className='sm:flex gap-10 hidden relative left-80'>

          {
            Navlinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>


            ))
          }
        </ul>


        {
          token ? (
            <Link to="/login" >
              <button className='sm:block hidden' onClick={logout}>
                Logout
              </button>
            </Link>
          ) : (
            <Link to="/login" >
              <button className='sm:block hidden'>Login</button>
            </Link>
          )
        }

        {
          open &&
          <ul className='absolute top-14 right-0 sm:hidden space-y-4 px-10 h-80 w-full bg-gray-800'>

            {
              Navlinks.map((link, index) => (
                <li key={index} className='mt-4 p-2'>
                  <Link to={link.path} onClick={() => setOpen(false)}>{link.name}</Link>
                </li>


              ))
            }
          </ul>
        }


      </div>
    </nav>

  )
}

export default Navbar