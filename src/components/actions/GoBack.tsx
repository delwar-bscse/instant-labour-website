"use client"
import { APPLICATION_STATUS } from '@/types/jobTypes'
import React from 'react'
import { MdArrowBack } from 'react-icons/md'

const GoBack = ({ type }: { type: string }) => {


  const goBack = () => {
    window.history.back()
  }


  return (
    <div onClick={goBack} className='flex items-center gap-2 md:gap-4 cursor-pointer pb-4 md:pb-6 group'>
      <span className='size-6 md:size-9 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-200'>
        < MdArrowBack className='size-4 md:size-6' />
      </span>
      {type === APPLICATION_STATUS.PENDING && <h2 className='text-xl md:text-3xl font-semibold text-gray-600 capitalize'>View All Applied Workers</h2>}
      {type === APPLICATION_STATUS.APPROVED && <h2 className='text-xl md:text-3xl font-semibold text-gray-600 capitalize'>View All Approved Workers</h2>}
    </div>
  )
}

export default GoBack