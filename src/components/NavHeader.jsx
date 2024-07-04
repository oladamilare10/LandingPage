import React from 'react'
import logo from '../assets/logo.png'

const NavHeader = () => {
  return (
    <div className='absolute top-0 py-4 px-12 flex w-full border-b border-b-slate-500'>
      <div>
        <img
         src={logo} 
         width={35}
         height={35}
         className='object-contain object-center'
         alt="logo" />
      </div>
      <div className='ml-auto mt-2 text-sm font-medium'>
        <nav>
            <a href='#home' className='text-gray-600 hover:text-purple-600'>Home</a>
            <a href='#about' className='ml-4 text-gray-600 hover:text-purple-600'>Services</a>
            <a href='#services' className='ml-4 text-gray-600 hover:text-purple-600'>Career</a>
            <a href='#contact' className='ml-4 text-gray-600 hover:text-purple-600'>Contact</a>
            <a href='#login' className='ml-12 border border-purple-600 px-4 py-2 rounded-full bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600'>Get Started</a>
        </nav>
      </div>
    </div>
  )
}

export default NavHeader
