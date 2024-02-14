import React from 'react'

const Model = ({isOpen,onClose}) => {

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? " " : "hidden"}`}>
    <div className='model-container'>
        <div className='bg-indigo-700 p-5 h-96 text-center lg:w-[500px] rounded shadow-md'>
            <h2 className='text-xl font-semibold mb-4 mt-6 uppercase'>Please Login Here...</h2>
            <form className='px-4'>
                <div className='mb-3'> 
                    <input type="email" name='email' id='email' placeholder='example@gmail.com' className='w-full
                    rounded-md border border-[#e0e0e0] bg-white p-3 text-base font-medium text-[#6b7280]
                    focus:border-[#6a64f1] focus:shadow-md' />
                </div>
                <div className='mb-4'>
                    <input type="password" name='password' id='password' placeholder='Enter your password here' className='w-full
                    rounded-md border border-[#e0e0e0] bg-white p-3 text-base font-medium text-[#6b7280]
                    focus:border-[#6a64f1] focus:shadow-md' />
                </div>
                <div >
                    <button className='hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3
                    px-8 text-base font-semibold text-white outline-none'>Login</button>
                </div>
            </form>
            <button onClick={onClose} className='bg-orange-300 hover:bg-gray-500 font-semibold py-2 px-4 rounded inline-flex
            items-center mt-4'>Close</button>
        </div>
    </div>
      
    </div>
  )
}

export default Model
