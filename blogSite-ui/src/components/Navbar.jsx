import React, { useState} from 'react'
import {NavLink } from 'react-router-dom'
import { FaBars} from 'react-icons/fa'
import { FiTwitter } from "react-icons/fi";
import { FaDribbble } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { HiOutlineXMark } from "react-icons/hi2";
import Model from './Model';

const Navbar = () => {

    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [isModelOpen,setIsModelOpen] = useState(false);

    const togglebtn=()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    const openModel=()=>{
        setIsModelOpen(true);
    }
    const closeModel=()=>{
        setIsModelOpen(false);
    }

    const naviItems=[
        {path:"/" ,link: "Home"},
        {path:"/blog", link: "Blog"},
        {path:"/services", link:"Services"},
        {path:"/contact", link:"Contact"},
        {path:"/about", link:"About"}
    ]
  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center md:p-8'>
        <a href="/" className='text-3xl font-bold text-white'>the<span className='text-orange-700 text-4xl mt-6'>
        Post</span></a>
        <ul className='md:flex gap-12 text-lg hidden'>
            {
                naviItems.map(({path,link})=><li className='text-white' key={path}>
                    <NavLink className={({isActive})=>{
                        isActive ? "active" : ""
                    }} to={path}>{link}</NavLink>
                </li>)
            }
        </ul>

       
       <div className='text-white lg:flex gap-4 items-center hidden'>
         <a href="/" className='hover:text-orange-600'><FiTwitter/></a>
         <a href="/" className='hover:text-orange-600'><FaDribbble/></a>
         <a href="/" className='hover:text-orange-600'><FaFacebook/></a>
         <button onClick={openModel} className='bg-orange-600 px-6 py-2 font-medium rounded hover:bg-slate-600 transition-all
         duration-200 ease-in-out'>Log In</button>
       </div>


       <Model isOpen={isModelOpen} onClose={closeModel}/>

       <div className='md:hidden'>
        <button onClick={togglebtn} className='cursor-pointer'>
            {
                isMenuOpen ? <HiOutlineXMark className='w-7 h-7'/> : <FaBars  className='w-5 h-5' />
            }
        </button>
       </div>
      </nav>


      <div>
      <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : " hidden" } `}>
            {
                naviItems.map(({path,link})=><li className='text-black' key={path}>
                    <NavLink onClick={togglebtn} to={path}>{link}</NavLink>
                </li>)
            }
        </ul>
      </div>
    </header>
  )
}

export default Navbar
