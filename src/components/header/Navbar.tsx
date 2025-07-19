"use client"
import Image from 'next/image'
import Login from './Login'
import Register from './Register'
import { useState } from 'react'
import logo from '../../asset/images/shopping.png'
import Link from 'next/link'


const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  return (
    <>
      <nav className="navbar bg-base-100 shadow-lg px-4 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Left: Logo and Title */}
        <div className="flex items-center gap-2 py-2 md:py-0">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Logo" width={40} height={40} className="rounded-full" />
            <span className="text-xl font-bold ml-2">Online Shopping</span>
          </Link>
        </div>
        {/* Center/Right: Search and User Panel */}
        <div className="flex flex-col md:flex-row gap-2 items-center w-full md:w-auto mt-2 md:mt-0">
          <input type="text" placeholder="Search" className="input input-bordered w-full md:w-48 lg:w-64" />
          {isLoggedIn ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="overflow-hidden w-10 rounded-full">
                  <Image src={logo} alt="Logo" width={40} height={40} className="rounded-full" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <button className="btn btn-outline btn-sm" onClick={() => setShowLogin(true)}>Login</button>
              <button className="btn btn-primary btn-sm" onClick={() => setShowRegister(true)}>Register</button>
            </div>
          )}
        </div>
      </nav>
      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded shadow-lg p-4 relative w-full max-w-md">
            <button className="absolute top-2 right-2 btn btn-sm btn-circle" onClick={() => setShowLogin(false)}>&times;</button>
            <Login onLoginSuccess={() => { setIsLoggedIn(true); setShowLogin(false); }} onClose={() => setShowLogin(false)} />
            <div className="flex justify-end mt-2">
              <button className="btn btn-primary btn-sm" onClick={() => { setIsLoggedIn(true); setShowLogin(false); }}>Demo Login</button>
            </div>
          </div>
        </div>
      )}
      {/* Register Modal */}
      {showRegister && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded shadow-lg p-4 relative w-full max-w-md">
            <button className="absolute top-2 right-2 btn btn-sm btn-circle" onClick={() => setShowRegister(false)}>&times;</button>
            <Register />
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
