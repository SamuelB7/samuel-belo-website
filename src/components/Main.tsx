import React from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'

function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-2'>Samuel Belo</h1>
                <h1 className='py-2'>Fullstack Developer</h1>
                <p className='py-4 max-w-[70%] m-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lobortis felis. Praesent eget augue sit amet sapien fermentum euismod id porta enim. Donec nisi augue, condimentum quis molestie eget, iaculis vitae ipsum.
                </p>
                <div className='flex items-center justify-between max-w-xs m-auto py-4'>
                    <div className='rounded-full border border-white p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full border border-white p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full border border-white p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <HiOutlineDocumentText />
                    </div>
                    <div className='rounded-full border border-white p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaWhatsapp />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main