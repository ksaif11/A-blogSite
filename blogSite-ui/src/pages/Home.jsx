import React from 'react'
import Banner from '../components/Banner'
import BlogPage from '../components/BlogPage'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=''>
      <Banner/>
      <div className='mx-w-7xl mx-auto p-7'>
        <BlogPage/>
      </div>
    </div>
  )
}

export default Home
