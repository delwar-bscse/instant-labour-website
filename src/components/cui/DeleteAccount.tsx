// "use client"
import React from 'react'
import { Button } from '../ui/button'

const DeleteAccount = () => {
  return (
    <div className="w-full max-w-[400px] mx-auto flex text-center justify-center px-4">
      <div className="bg-white customShadow px-4 md:px-8 py-4 md:py-6 w-full rounded-md">
        <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-gray-600 pb-6">Are you sure you want to delete your account</h2>
        <div className='w-60 mx-auto'>
          <Button variant="redBtn" type="submit" size="llg" className="w-full text-xl">
            Yes
          </Button>
          </div>
      </div>
    </div>
  )
}

export default DeleteAccount