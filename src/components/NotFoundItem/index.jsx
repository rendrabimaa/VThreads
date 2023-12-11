import React from 'react';
import { ImCross } from 'react-icons/im';


const NotFoundItem = ({ children }) => {
  return (
    <p className='flex gap-2 text-red-500 items-center text-2xl font-bold justify-center w-full'>
        <ImCross />
        {children} Not Found 
    </p>
  )
}

export default NotFoundItem