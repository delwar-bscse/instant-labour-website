import React from 'react'
import { Button } from '../ui/button'

const DeleteAccount = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto flex text-center justify-center px-4">
      <div className="bg-white customShadow px-4 md:px-8 py-6 md:py-8 w-full rounded-md">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-600 pb-12">Are you sure you want to delete your account</h2>
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