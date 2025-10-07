"use client"
import EditProfileComponent from '@/components/cui/EditProfileConponent'
import React from 'react'
import { MdArrowBack } from "react-icons/md";

const goBack = () => {
  window.history.back()
}

const EditProfile = () => {
  return (
    <div  className="w-full max-w-[700px] mx-auto pb-12">
      <div onClick={goBack} className='flex items-center gap-2 md:gap-4 cursor-pointer pb-4 md:pb-6 group'>
        <span className='size-9 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-200'>
          < MdArrowBack className='size-6'/>
        </span>
        <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800'>Edit Profile</h2>
      </div>
      <EditProfileComponent />
    </div>
  )
}

export default EditProfile