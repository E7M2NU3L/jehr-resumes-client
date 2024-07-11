import React from 'react'
import { IoCheckmarkCircle } from 'react-icons/io5'

interface FormSuccessProps {
  message: string;
}

const FormSuccess: React.FC<FormSuccessProps> = ({ message }) => {
    if (!message) return null;

    return (
        <div
        className='w-full my-2 py-1 rounded-md border border-emerald-500 bg-green-500/15 text-emerald-500 font-light text-lg flex gap-x-2 items-center'
        style={{ fontFamily: "Anton SC, serif" }}
        >
        <IoCheckmarkCircle />
        {message}
        </div>
  )
}

export default FormSuccess;
