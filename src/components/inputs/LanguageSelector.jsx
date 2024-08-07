import { IconLanguage } from '@tabler/icons-react'
import React from 'react'

const LanguageSelector = ({selectedLanguage, setSelectedLanguage, languages }) => {
  return (
    <span className='cursor-pointer rounded-full space-x-1 pl-2 bg-[#000000] flex items-center flex-row'>
    <IconLanguage size={20} className='text-gray-400' />
    <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className='bg-black flex flex-row rounded-full py-1 w-20 text-white'>
        {languages.map((lang) => {
            return(<option key={lang} value={lang}>
                {lang}
            </option>)
        })}
    </select>
    </span>
  )
}

export default LanguageSelector