import React from 'react'

const Navbar = () => {
    return (
        <div className='w-screen h-[13%] bg-black flex justify-between  items-center pl-10 pr-10 '>
            <div className='h-auto w-auto bg-black'>
                <h1 className='text-4xl font-cormorantUpright text-white'>GERICHT</h1>
            </div>
            <div className='w-[40%] bg-black'>
                <ul className='flex gap-5 text-white justify-end text-sm font-serif '>
                    <li>Home</li>
                    <li>Pages</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                    <li>Landing</li>
                </ul>

            </div>

            <div className='flex items-center justify-between h-auto w-[20%] bg-black text-white text-sm font-serif '>
            <h1>Log In / Registration</h1>
            <img src="Line.png" alt="" />
            <h1>Book Table</h1>
            </div>
            
        </div>
    )
}

export default Navbar

