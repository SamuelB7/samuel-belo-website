import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

function Contact() {
    const { t } = useTranslation()

    return (
        <div id='contact' className='w-full my-5'>
            <div className='max-w-7xl m-auto p-4 w-full h-full'>
                <h2 className=''>{t('contact_title')}</h2>
                <form action="https://formsubmit.co/belo.samuel@gmail.com" method='POST'>
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <label className='text-sm py-2'>{t('contact_name')}</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300 text-slate-700' type="text" name='name' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm py-2'>{t('contact_email')}</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300 text-slate-700' type="email" name='email' />
                        </div>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='text-sm py-2'>{t('contact_message')}</label>
                        <textarea className='border-2 rounded-lg p-3 border-gray-300 text-slate-700' rows={10} name='message'></textarea>
                    </div>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_subject" value="Contato do website pessoal"></input>
                    <input type="hidden" name="_next" value="https://samuelbelo.com.br/thankyou"></input>
                    <button type='submit' className='w-full p-4 text-gray-100 bg-gradient-to-r from-slate-300 to-slate-600 mt-4'>{t('contact_send')}</button>
                </form>
            </div>
            {/* <div className='flex justify-center py-12'>
            <Link href='/#home' scroll={false}>
                <div className='rounded-full border border-white p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp size={30}/>
                </div>
            </Link>

        </div> */}
        </div>
    )
}

export default Contact