import React from 'react'
import { BsFillBuildingFill } from 'react-icons/bs'

//className='w-full p-7 flex justify-center items-center'
function Experience() {
    return (
        <div id='experience' className='flex flex-col items-center p-7'>
            <h2 className='text-center'>PROFESSIONAL EXPERIENCE</h2>
            <div className='flex flex-col md:flex-row justify-center my-7'>
                <div className='w-full md:w-7/12'>

                    <ol className='flex flex-col md:flex-row relative border-l border-white'>
                        <li className='mb-10 ml-4'>
                            <div className='absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-white' />
                            <div className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                                <span className='inline-block px-2 py-1 font-semibold text-slate-700 bg-white rounded-md'>
                                    09/2022 - Present
                                </span>
                                <h3 className='text-lg font-semibold'>
                                    Fullstack Developer
                                </h3>
                                {/* <div className='my-1 text-sm font-normal leading-none'>
                                    1 Year
                                </div> */}
                            </div>
                            <div className='flex items-center gap-3'>
                                <BsFillBuildingFill />
                                <h6 className='my-2'>Seteloc SA</h6>
                            </div>
                            <p className='my-2 text-base font-normal text-justify'>
                                Helped on the development of the admin panel used by both company and
                                clients.
                            </p>
                            <p className='my-2 text-base font-normal text-justify'>
                                Worked on the development of the eCommerce website used by the
                                company to sell their used vehicles.
                            </p>
                            <h6 className='my-3'>Technologies used:</h6>
                            <div className='flex gap-2 max-[420px]:flex-col'>
                                <span className='inline-block px-2 py-1 font-semibold text-slate-700 bg-white rounded-md max-[420px]:w-28'>
                                    TypeScript
                                </span>
                                <span className='inline-block px-2 py-1 font-semibold text-slate-700 bg-white rounded-md max-[420px]:w-28'>
                                    NestJs
                                </span>
                                <span className='inline-block px-2 py-1 font-semibold text-slate-700 bg-white rounded-md max-[420px]:w-28'>
                                    NextJs
                                </span>
                                <span className='inline-block px-2 py-1 font-semibold text-slate-700 bg-white rounded-md max-[420px]:w-28'>
                                    PostgreSql
                                </span>
                                <span className='inline-block px-2 py-1 font-semibold text-slate-700 bg-white rounded-md max-[420px]:w-28'>
                                    MongoDB
                                </span>
                                <span className='inline-block px-2 py-1 font-semibold text-slate-700 bg-white rounded-md max-[420px]:w-28'>
                                    GraphQL
                                </span>
                            </div>
                        </li>
                    </ol>

                    <ol className='flex flex-col md:flex-row relative border-l border-white'>
                        <li className='mb-10 ml-4'>
                            <div className='absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-white' />
                            <div className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                                <span className='inline-block px-2 py-1 font-semibold text-slate-700 bg-white rounded-md'>
                                    03/2022 - 08/2022
                                </span>
                                <h3 className='text-lg font-semibold'>
                                    Fullstack Developer
                                </h3>
                            </div>
                            <div className='flex items-center gap-3'>
                                <BsFillBuildingFill />
                                <h6 className='my-2'>Lyx Participações</h6>
                            </div>
                            <p className='my-2 text-base font-normal text-justify'>
                                Software development for internal management solutions.
                            </p>
                            <h6 className='my-3'>Technologies used:</h6>
                            <div className='flex gap-2 max-[420px]:flex-col'>
                                <span className='inline-block px-2 py-1 font-semibold text-slate-700 bg-white rounded-md max-[420px]:w-28'>
                                    NodeJs
                                </span>
                                <span className='inline-block px-2 py-1 font-semibold text-slate-700 bg-white rounded-md max-[420px]:w-28'>
                                    Laravel
                                </span>
                                <span className='inline-block px-2 py-1 font-semibold text-slate-700 bg-white rounded-md max-[420px]:w-28'>
                                    PostgreSql
                                </span>
                            </div>
                        </li>
                    </ol>

                    <ol className='flex flex-col md:flex-row relative border-l border-white'>
                        <li className='mb-10 ml-4'>
                            <div className='absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-white' />
                            <div className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                                <span className='inline-block px-2 py-1 font-semibold text-slate-700 bg-white rounded-md'>
                                    07/2021 - 03/2022
                                </span>
                                <h3 className='text-lg font-semibold'>
                                    Fullstack Developer
                                </h3>
                            </div>
                            <div className='flex items-center gap-3'>
                                <BsFillBuildingFill />
                                <h6 className='my-2'>
                                    TI360 Soluções em Tecnologia da Informação
                                </h6>
                            </div>
                            <p className='my-2 text-base font-normal text-justify'>
                                Software development for other companies.
                            </p>
                            <h6 className='my-3'>Technologies used:</h6>
                            <div className='flex gap-2 max-[420px]:flex-col'>
                                <span className='inline-block px-2 py-1 font-semibold text-slate-700 bg-white rounded-md max-[420px]:w-28'>
                                    Angular
                                </span>
                                <span className='inline-block px-2 py-1 font-semibold text-slate-700 bg-white rounded-md max-[420px]:w-28'>
                                    Laravel
                                </span>
                                <span className='inline-block px-2 py-1 font-semibold text-slate-700 bg-white rounded-md max-[420px]:w-28'>
                                    MySQL
                                </span>
                            </div>
                        </li>
                    </ol>


                </div>
            </div>
        </div>
    )
}

export default Experience