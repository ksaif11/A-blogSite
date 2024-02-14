import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-gray-900 mx-auto'>
      <div className='text-white text-center'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to Our Blog</h1>
        <p className='text-grey-100 lg:w-3/5 mx-auto mb-5'>
            Start your blog journey from today and join the community of readers and writers who shares their 
            stories and ideas. We offers everything you need to get start from helpful tips and tutorials.
        </p>
        <div>
            <Link to="/" className='font-medium hover:text-orange-600 inline-flex items-center py-1'>
            Learn more<FaLongArrowAltRight className='mt-1 ml-2' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Banner