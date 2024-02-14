import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-600'>
      <div className='px-4 pt-16 mx-auto md:mx-w-full lg:max-w-screen-xl md:px-20 lg:px-4'>
        <div>
            <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                <div>
                    <p className='font-medium tracking-wide text-grey-500'>Category</p>
                    <ul className='mt-2 space-y-3'>
                        <li>
                            <a href="/" className='text-grey-400 transition-colors duration-300 
                            hover:text-orange-300'>News</a>
                        </li>
                        <li>
                            <a href="/" className='text-grey-400 transition-colors duration-300 
                            hover:text-orange-300'>Games</a>
                        </li>
                        <li>
                            <a href="/" className='text-grey-400 transition-colors duration-300 
                            hover:text-orange-300'>World</a>
                        </li>
                        <li>
                            <a href="/" className='text-grey-400 transition-colors duration-300 
                            hover:text-orange-300'>References</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='font-medium tracking-wide text-grey-500'>Web</p>
                    <ul className='mt-2 space-y-3'>
                        <li>
                            <a href="/" className='text-grey-400 transition-colors duration-300 
                            hover:text-orange-300'>eCommerce</a>
                        </li>
                        <li>
                            <a href="/" className='text-grey-400 transition-colors duration-300 
                            hover:text-orange-300'>Portfolio</a>
                        </li>
                        <li>
                            <a href="/" className='text-grey-400 transition-colors duration-300 
                            hover:text-orange-300'>Bussiness</a>
                        </li>
                        <li>
                            <a href="/" className='text-grey-400 transition-colors duration-300 
                            hover:text-orange-300'>Entertainment</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='font-medium tracking-wide text-grey-500'>Cherry</p>
                    <ul className='mt-2 space-y-3'>
                        <li>
                            <a href="/" className='text-grey-400 transition-colors duration-300 
                            hover:text-orange-300'>News</a>
                        </li>
                        <li>
                            <a href="/" className='text-grey-400 transition-colors duration-300 
                            hover:text-orange-300'>Games</a>
                        </li>
                        <li>
                            <a href="/" className='text-grey-400 transition-colors duration-300 
                            hover:text-orange-300'>World</a>
                        </li>
                        <li>
                            <a href="/" className='text-grey-400 transition-colors duration-300 
                            hover:text-orange-300'>References</a>
                        </li>
                    </ul>
                </div>
                <div className='md:max-w-md lg:col-sapn-2 lg:mt-0 mt-5'>
              <p className='font-medium tracking-wide text-grey-300'>Subscribe for updates</p>
              <form className='mt-4 flex flex-col md:flex-row'>
                <input type="email" name='email' id='email' className='flex-grow w-25 px-4 h-12 mb-3 transition
                duration-200 bg-white border border-grey-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-600
                focus:outline-none '/>
                <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide
                text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none
                border'>Subscribe</button>
              </form>
              <p className='mt-2 text-sm text-cyan-200 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo vero reiciendis rem,
               et laborum tenetur consectetur! Consectetur, saepe. Aperiam soluta adipisci ex veniam illum id .</p>
            </div>
            </div>
            
        </div>
        
      </div>
    </div>
  )
}

export default Footer
{/* <div>
                    <p className='font-medium tracking-wide text-grey-500'>Bussiness</p>
                    <ul className='mt-2 space-y-3'>
                        <li>
                            <a href="/" className='text-grey-400 transition-colors duration-300 
                            hover:text-orange-300'>News</a>
                        </li>
                        <li>
                            <a href="/" className='text-grey-400 transition-colors duration-300 
                            hover:text-orange-300'>Games</a>
                        </li>
                        <li>
                            <a href="/" className='text-grey-400 transition-colors duration-300 
                            hover:text-orange-300'>World</a>
                        </li>
                        <li>
                            <a href="/" className='text-grey-400 transition-colors duration-300 
                            hover:text-orange-300'>References</a>
                        </li>
                    </ul>
                </div> */}