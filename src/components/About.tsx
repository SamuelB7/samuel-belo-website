import React from 'react'
import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()

  return (
    <div id='about' className='w-full p-7 flex justify-center items-center'>
      <div className='max-w-7xl flex flex-col'>
        <div className='flex flex-col items-center justify-center text-justify'>
          <h2 className='py-2'>{t('about_title')}</h2>
          <p className='py-2'>
            {t('about_1')}
          </p>
          <p className='py-2'>
            {t('about_2')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About