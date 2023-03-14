import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import  { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
    const [menu, setMenu] = useState(false)

    function handleMenu() {
        setMenu(!menu)
    }

    return (
        <div className='fixed w-full h-20 shadow-xl z-50'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <h2>Samuel Belo</h2>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm hover:border-b'>HOME</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm hover:border-b'>ABOUT</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm hover:border-b'>EXPERIENCE</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm hover:border-b'>CONTACT</li>
                        </Link>
                    </ul>
                    <div onClick={handleMenu} className='md:hidden'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>

            <div className={menu ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={
                        menu ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-700 p-10 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <h2>Samuel Belo</h2>
                            <div onClick={handleMenu} className='rounded-full shadow-sm shadow-gray-400 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='py-4 flex flex-col'>
                            <ul>
                                <Link href='/'>
                                    <li className='py-4 text-sm'>HOME</li>
                                </Link>
                                <Link href='/'>
                                    <li className='py-4 text-sm'>ABOUT</li>
                                </Link>
                                <Link href='/'>
                                    <li className='py-4 text-sm'>EXPERIENCE</li>
                                </Link>
                                <Link href='/'>
                                    <li className='py-4 text-sm'>CONTACT</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar