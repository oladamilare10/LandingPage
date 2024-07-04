import React from 'react'
import TopTag from './TopTag'
import MainText from './MainText'
import Tag from './Tag'
import Button from './Button'
import Footer from './Footer'
import NavHeader from './NavHeader'
import Pricing from './Pricing'
import VirtualReality from './VirtualReality'

const Header = () => {
  return (
    <div className='w-full'>
      <NavHeader />
      <TopTag title="Become a" className="text-[1.8rem] mb-8 pointer-events-none font-bold bg-clip-text text-stone-300" />
      <MainText text="FRONTEND DEVELOPMENT" className="text-[3.5rem] pointer-events-none font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500" />
      <Tag text="in 6 weeks" className="absolute lg:right-[28%] pointer-events-none lg:float-end text-stone-400 -mt-6 right-8 font-semibold text-md w-[13rem] " />
      <div className="mt-12">
        <p className="text-sm text-gray-500 pointer-events-none -mt-4">Become a frontend web development, learn all the latest technologies within SIX weeks</p>
      </div>
      <div className='flex justify-center mt-10'>
        <Button>
          Get Started
        </Button>
        <Button inverted className="ml-8">Get More Info</Button>
      </div>
      <div className="mt-12">
        <p className="text-sm text-gray-500 pointer-events-none">Discover more about our courses and specializations</p>
      </div>
      <Pricing />
      <VirtualReality />
      <Footer />
    </div>
  )
}

export default Header
