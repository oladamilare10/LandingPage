import React from 'react'
import background from '../assets/background.jpg'

const Background = ({ children }) => {
  return (
    <div style={{'--image-url': `url(${background})`}} 
    className='absolute top-0 left-0 right-0 bottom-0 bg-[image:var(--image-url)] w-full h-full justify-center bg-no-repeat bg-cover bg-center rounded-lg'>
        <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/80'>
            {children}
        </div>
    </div>
  )
}

export default Background
