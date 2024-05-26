import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-black flex items-center justify-between p-[1.125rem] min-h-[120px] w-full overflow-hidden'>

        <div className='relative left-5'>
            <img src="https://i.imgur.com/T0Ew5Bq.png" className=' object-cover h-[103px]' alt="" />
        </div>

        <div className='h-full items-end'>
            <ul className='flex items-center space-x-6'>
                <li>
                    <a href='#' className='text-[#000] text-[1.125rem] font-bold'>Home</a>
                </li>
                <li>
                    <a href='#' className='text-[#000] text-[1.125rem] font-bold'>About</a>
                </li>
                <li>
                    <a href='#' className='text-[#000] text-[1.125rem] font-bold'>Services</a>
                </li>
                <li>
                    <a href='#' className='text-[#000] text-[1.125rem] font-bold'>Contact</a>
                </li>
            </ul>
        </div>

        <div>

        </div>
      
    </div>
  )
}

export default Navbar
