"use client"

import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import JobPostForm from '@/components/cui/JobPostForm'

const goBack = () => {
  window.history.back()
}

const EditPost = () => {
  return (
    <div className="w-full max-w-175 mx-auto py-16">
      <div onClick={goBack} className='flex items-center gap-2 md:gap-4 cursor-pointer pb-4 md:pb-6 group'>
        <span className='size-9 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-200'>
          < MdArrowBack className='size-6' />
        </span>
        <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800'>Edit Post</h2>
      </div>
      <JobPostForm />
    </div>
  )
}

export default EditPost