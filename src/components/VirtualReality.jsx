import React from 'react'
import vrImage from '../assets/vr.png'

const VirtualReality = () => {
  return (
    <div className='absolute hidden'>
      <img src={vrImage} width={380} alt="Virtual reality" />
    </div>
  )
}

export default VirtualReality
