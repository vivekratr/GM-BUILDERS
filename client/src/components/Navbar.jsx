import React from 'react'
import PluralitySocialConnect from 'plurality-social-connect';

const Navbar = () => {
  return (
    <div className=' bg-black flex items-center justify-between p-[1.125rem] min-h-[120px] w-full overflow-hidden'>

        <div className='relative left-5'>
            <img src="https://i.imgur.com/T0Ew5Bq.png" className=' object-cover h-[103px]' alt="" />
        </div>

        <div className=''>
            <ul className='flex items-end min-h-[120px] min-w-[500px] justify-between space-x-6'>
                <li>
                    <a href='#' className='text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block'>Home</a>
                </li>
                <li>
                    <a href='#' className='text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block'>Article</a>
                </li>
                <li>
                    <a href='#' className='text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block'>News</a>
                </li>
                <li>
                    <a href='#' className='text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block'>Communities</a>
                </li>
                <li>
                    <a href='#' className='text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block'>Write</a>
                </li>
            </ul>
        </div>

        <div>

        </div>
      
    </div>
  )
}

export default Navbar
