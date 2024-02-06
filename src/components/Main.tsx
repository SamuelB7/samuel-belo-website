import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

function Main() {
    const { t, i18n } = useTranslation()

    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1 className='py-2'>Samuel Belo</h1>
                    <h1 className='py-2'>{t('main_title')}</h1>
                    <div className='flex items-center justify-between max-w-xs m-auto py-4'>
                        <div className='rounded-full border border-white p-3 cursor-pointer hover:scale-105 ease-in duration-300 group flex relative'>
                            <Link href="https://www.linkedin.com/in/samuelb7/" target={'_blank'}>
                                <FaLinkedinIn />
                            </Link>
                            <span className="group-hover:opacity-100 transition-opacity bg-slate-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
                                LinkedIn
                            </span>
                        </div>
                        <div className='rounded-full border border-white p-3 cursor-pointer hover:scale-105 ease-in duration-300 group flex relative'>
                            <Link href="https://github.com/SamuelB7" target={'_blank'}>
                                <FaGithub />
                            </Link>
                            <span className="group-hover:opacity-100 transition-opacity bg-slate-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
                                GitHub
                            </span>
                        </div>
                        <div className='rounded-full border border-white p-3 cursor-pointer hover:scale-105 ease-in duration-300 group flex relative'>
                            <a href="documents/SAMUEL_Resume.pdf" download={"SAMUEL's Resume.pdf"}>
                                <HiOutlineDocumentText />

                            </a>
                            <span className="group-hover:opacity-100 transition-opacity bg-slate-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
                                {t('main_resume')}
                            </span>

                        </div>
                        <div className='rounded-full border border-white p-3 cursor-pointer hover:scale-105 ease-in duration-300 group flex relative'>
                            <Link href="https://wa.me/554198834077" target={'_blank'}>
                                <FaWhatsapp />
                            </Link>
                            <span className="group-hover:opacity-100 transition-opacity bg-slate-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
                                WhatsApp
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main