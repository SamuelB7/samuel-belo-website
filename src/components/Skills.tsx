import Image from 'next/image'
import React from 'react'
import JsPng from 'public/assets/js.png'
import TsPng from 'public/assets/typescript.png'
import NodePng from 'public/assets/nodejs.png'
import ReactPng from 'public/assets/react.png'
import NextSvg from 'public/assets/next.svg'
import NestJsSvg from 'public/assets/nestjs.svg'
import UbuntuPng from 'public/assets/ubuntu.png'
import PostgresSvg from 'public/assets/postgresql.svg'

function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-7xl mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest'>Skills that I'm experienced with:</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
                    <div className='flex gap-4 justify-center items-center'>
                        <div className=''>
                            <Image
                                src={JsPng}
                                alt='/'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className=''>
                            <h2>JAVASCRIPT</h2>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
                    <div className='flex gap-4 justify-center items-center'>
                        <div className=''>
                            <Image
                                src={TsPng}
                                alt='/'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className=''>
                            <h2>TYPESCRIPT</h2>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
                    <div className='flex gap-4 justify-center items-center'>
                        <div className=''>
                            <Image
                                src={NodePng}
                                alt='/'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className=''>
                            <h2>NODEJS</h2>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
                    <div className='flex gap-4 justify-center items-center'>
                        <div className=''>
                            <Image
                                src={NestJsSvg}
                                alt='/'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className=''>
                            <h2>NEST JS</h2>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
                    <div className='flex gap-4 justify-center items-center'>
                        <div className=''>
                            <Image
                                src={ReactPng}
                                alt='/'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className=''>
                            <h2>REACT</h2>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
                    <div className='flex gap-4 justify-center items-center'>
                        <div className=''>
                            <Image
                                src={NextSvg}
                                alt='/'
                                width={70}
                                height={70}
                            />
                        </div>
                        <div className=''>
                            <h2>NEXT JS</h2>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
                    <div className='flex gap-4 justify-center items-center'>
                        <div className=''>
                            <Image
                                src={PostgresSvg}
                                alt='/'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className=''>
                            <h2>PG SQL</h2>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex justify-center items-center'>
                    <div className='flex gap-4 justify-center items-center'>
                        <div className=''>
                            <Image
                                src={UbuntuPng}
                                alt='/'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className=''>
                            <h2>UBUNTU</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills