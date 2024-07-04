import React from 'react'

const Pricing = () => {
  return (
    <>
      <div className='flex pointer-events-none justify-center mt-4'>
        <strike className="relative mt-7 text-gray-300 font-bold text-2xl -mr-1">200K</strike>
        <div className='text-[5rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500'>50k</div>
        <div className='text-sm text-gray-400 self-end mb-[22px]'>Limited time</div>
      </div>
      <div className='text-gray-300 pointer-events-none flex justify-center text-sm font-semibold'>Get <div className='font-bold text-[1.7rem] mx-2'>75%</div> off</div>
    </>
  )
}

export default Pricing
