import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Fragment, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export default function Header() {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState("English")
  const [flag, setFlag] = useState("img/united-states.png")

  useEffect(() => {
    if (i18n.language === "en") {
      setLang("English")
      setFlag("img/united-states.png")
      console.log('en')
    } else if (i18n.language === "pt-BR") {
      setLang("Português")
      setFlag("img/brazil.png")
      console.log('br')
    }
  }, [])

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (lng === "en") {
      setLang("English")
    }
    if (lng === "pt-BR") {
      setLang("Português")
    }
  }

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <header className='flex justify-center'>
      <h1 className="font-black text-3xl text-gray-900 dark:text-gray-100">Samuel Belo</h1>
      <div className='flex flex-grow justify-center items-center'>
        <h1 className="font-black text-3xl text-gray-900 dark:text-gray-100">
          {t('header_home')}
        </h1>
        <h1 className="font-black text-3xl text-gray-900 dark:text-gray-100">
          {t('header_about')}
        </h1>
        <h1 className="font-black text-3xl text-gray-900 dark:text-gray-100">
          {t('header_about')}
        </h1>
      </div>
      <div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              {lang}
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <>
                      <img src="img/brazil.png" height={30} width={30}/>
                      <a
                        onClick={() => changeLanguage('pt-BR')}
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Português
                      </a>
                    </>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <>
                      <img src="img/united-states.png" height={30} width={30}/>
                      <a
                        onClick={() => changeLanguage('en')}
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        English
                      </a>
                    </>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  )
}