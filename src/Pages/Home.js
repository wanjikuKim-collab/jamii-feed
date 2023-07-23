import React from 'react'
import Feed from '../Components/Feed'
import Stories from '../Components/Stories'
import Navbar from '../Layouts/Navbar'

function Home() {
  return (
    <div className='home flex  bg-black text-white overflow-hidden'>
        <nav className='home__nav'>
            <Navbar/>
        </nav>
        <section className='home__timeline w-full flex flex-col'>
          <Stories/>
          <Feed/>
        </section>
    </div>
  )
}

export default Home