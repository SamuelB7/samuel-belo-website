import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import LangSelect from './LangSelect'

function Navbar() {
    const { t } = useTranslation()
    const [menu, setMenu] = useState(false)

    function handleMenu() {
        setMenu(!menu)
    }

    return (
        <div className='fixed w-full h-20 shadow-xl z-50 bg-slate-700'>
            <div className='flex max-md:justify-end justify-center items-center w-full h-full px-2 2xl:px-16'>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/#home' scroll={false}>
                            <li className='ml-10 text-sm hover:border-b'>{t('navbar_home')}</li>
                        </Link>
                        <Link href='/#about' scroll={false}>
                            <li className='ml-10 text-sm hover:border-b'>{t('navbar_about')}</li>
                        </Link>
                        <Link href='/#experience' scroll={false}>
                            <li className='ml-10 text-sm hover:border-b'>{t('navbar_experience')}</li>
                        </Link>
                        <Link href='/#skills' scroll={false}>
                            <li className='ml-10 text-sm hover:border-b'>{t('navbar_skills')}</li>
                        </Link>
                    </ul>
                </div>
                <div className='hidden md:block '>
                    <LangSelect />
                </div>
                <div onClick={handleMenu} className='md:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            <div className={menu ? 'md:hidden fixed right-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={
                    menu ? 'fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-700 p-10 ease-in duration-500'
                        : 'fixed right-[-100%] top-0 p-10 ease-in duration-500'
                }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <h2>Samuel Belo</h2>
                            <div onClick={handleMenu} className='rounded-full border border-white cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='py-4 flex flex-col'>
                            <ul>
                                <Link href='/#home' scroll={false}>
                                    <li className='py-4 text-sm'>{t('navbar_home')}</li>
                                </Link>
                                <Link href='/#about' scroll={false}>
                                    <li className='py-4 text-sm'>{t('navbar_about')}</li>
                                </Link>
                                <Link href='/#experience' scroll={false}>
                                    <li className='py-4 text-sm'>{t('navbar_experience')}</li>
                                </Link>
                                <Link href='/#skills' scroll={false}>
                                    <li className='py-4 text-sm'>{t('navbar_skills')}</li>
                                </Link>
                            </ul>
                            <LangSelect />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar