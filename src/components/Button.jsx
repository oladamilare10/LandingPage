import React from 'react'

const Button = ({ children, inverted, className }) => {
  return (
    <button className={`flex items-center px-6 py-3 text-sm font-medium ${className && className} ${inverted ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 border border-purple-500 hover:border-purple-600' : 'text-white bg-gradient-to-r from-blue-600 to-purple-500'} hover:from-blue-700 hover:to-purple-600 rounded-md`}>{children}</button>
  )
}

export default Button
