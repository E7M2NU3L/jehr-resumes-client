import React from 'react'
import { FaExclamation } from 'react-icons/fa'

interface MessageProps {
    message : string
}

const FormError: React.FC<MessageProps> = ({message}) => {
    if (!message) return null;
  
    return (
    <div className='w-full my-2 py-1 rounded-md border border-destructive bg-destructive/15 text-destructive font-light text-lg flex gap-x-2 items-center' style={{
        fontFamily: "Anton SC, serif"
    }}>
        <FaExclamation />
        {message}
    </div>
  )
}

export default FormError