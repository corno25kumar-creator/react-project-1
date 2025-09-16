import React from 'react'

function header() {
  return (
    <div className="w-full bg-black text-white flex items-center justify-around p-4 h-20 sm:h-24 md:h-28 lg:h-32 text-xl sm:text-2xl md:text-3xl font-bold">

      <nav className='flex justify-between w-full items-center'>

        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500 rounded-full flex items-center justify-center text-sm sm:text-base md:text-lg">
          logo
        </div>

        <ul className="flex flex-wrap justify-center text-blue items-center gap-2 p-4 sm:gap-4 text-base md:text-2xl captialize font-bold">
            <li>Progress Task</li>
            <li>Completed Task</li>
            <li>Pending Task</li>
            <li>Sign In</li>
        </ul>


      </nav>

    </div>
  )
}

export default header
