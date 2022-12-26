import React from 'react'

function Header() {
    return (
        <div className='bg-orange-500 h-6 sm:h-10 lg:h-16 flex justify-center gap-4 sm:gap-6 lg:gap-10 pt-1 lg:pt-3'>
            <img src="/image/task-list.png" className='h-4 sm:h-8 lg:h-10' alt="todoList" />
            < h2 className='text-violet-900 text-xs sm:text-base lg:text-xl sm:font-bold lg:font-extrabold sm:pt-1' > ToDo List</ h2>
        </div >
    )
}

export default Header