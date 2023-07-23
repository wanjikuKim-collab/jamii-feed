import React from 'react'
import Feed from '../Components/Feed'
import Navbar from '../Layouts/Navbar'

function Home() {
  return (
    <div className='home flex  bg-black text-white'>
        <nav className='home__nav'>
            <Navbar/>
        </nav>
        <section className='home__timeline w-full'>
          <Feed/>
        </section>
    </div>
  )
}

export default Home