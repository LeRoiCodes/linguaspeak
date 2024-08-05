import { IconBriefcase, IconBulb, IconHeart, IconMoodSmile, IconSchool, IconWriting } from '@tabler/icons-react'
import React from 'react'

const categories = [
  {icon: IconBriefcase, label: "Business"},
  {icon: IconSchool, label: "Education"},
  {icon:IconBulb, label: "Creative"},
  {icon: IconHeart, label: "Health"},
  {icon: IconWriting, label: "Journaling"},
  {icon: IconMoodSmile, label: "Communication"},
]

const categoryLinks: React.FC = () => {
  return (
    <div className='mt-10 sm:mt-20'>
      {categories.map(({icon: Icon, label}) => {
        return(
          <a key={label} className='m-1 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 text-white'>
            <Icon size={18} />
            <p className='text-2xl'>{label}</p>
          </a>
        )
      })}
    </div>
  )
}

export default categoryLinks