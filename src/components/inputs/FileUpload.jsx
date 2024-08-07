import { IconPaperclip } from '@tabler/icons-react'
import React from 'react'


const FileUpload = ({handleFileUpload}) => {
  return (
    <label htmlFor='file-upload' className='cursor-pointer'>
        <IconPaperclip size={22} className='text-gray-400' />
        <input id='file-upload' type='file' onChange={handleFileUpload} className='hidden' />
    </label>
  )
}

export default FileUpload