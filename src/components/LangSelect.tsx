import Image from 'next/image'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaChevronDown } from 'react-icons/fa'

function LangSelect() {
    const { t, i18n } = useTranslation()
    const [expanded, setExpanded] = useState(false)
    const [lang, setLang] = useState(i18n.language === 'pt-BR' ? 'Português' : 'English')
    const [flag, setFlag] = useState(i18n.language === 'pt-BR'? '/assets/brazil.png' : '/assets/united-states.png')

    function close() {
        setExpanded(false)
    }

    function handleOption() {
        setExpanded(!expanded)
    }

    function changeLang (lng: string) {
        if(lng === 'pt_BR') {
            setLang('Português')
            setFlag('/assets/brazil.png')
        }

        if(lng === 'en') {
            setLang('English')
            setFlag('/assets/united-states.png')
        }

        i18n.changeLanguage(lng)
    }

    return (
        <div className='w-36 max-[420px]:m-0 ml-10' tabIndex={0} onBlur={close}>
            <div className="flex items-center justify-between gap-2 my-2 border border-white rounded-lg p-2 w-40" onClick={handleOption}>
                <Image src={flag} alt='' width={25} height={25}/>
                <p>{lang}</p>
                <FaChevronDown />
            </div>
            {expanded && (
                <div className="absolute w-40 bg-slate-700">
                    <ul className='border border-white rounded-md'>
                        <li className='flex justify-start gap-2 p-2' onClick={() => changeLang('en')}>
                            <Image src='/assets/united-states.png' alt='en' width={25} height={25}/>
                            <p>English</p>
                        </li>

                        <li className='flex justify-start gap-2 p-2' onClick={() => changeLang('pt_BR')}>
                            <Image src='/assets/brazil.png' alt='pt-br' width={25} height={25}/>
                            <p>Português</p>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default LangSelect