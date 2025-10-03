import EditProfileComponent from '@/components/cui/EditProfileConponent'
import React from 'react'

const EditProfile = () => {
  return (
    <div className='maxWidth py-4 md:py-8'>
      <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 text-center pb-4 md:pb-8'>Edit Profile</h2>
      <EditProfileComponent />
    </div>
  )
}

export default EditProfile