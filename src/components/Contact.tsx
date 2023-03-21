import Link from 'next/link'
import React from 'react'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

function Contact() {
  return (
    <div id='contact' className='w-full'>
        <div className='max-w-7xl m-auto p-4 w-full h-full'>
            <h2 className=''>Contact me</h2>
            <form action="">
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='text-sm py-2'>NAME</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300 text-slate-700' type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm py-2'>EMAIL</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300 text-slate-700' type="email" />
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='text-sm py-2'>MESSAGE</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-300 text-slate-700' rows={10}></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>SEND MESSAGE</button>
            </form>
        </div>
        <div className='flex justify-center py-12'>
            <Link href='/#home' scroll={false}>
                <div className='rounded-full border border-white p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp size={30}/>
                </div>
            </Link>

        </div>
    </div>
  )
}

export default Contact