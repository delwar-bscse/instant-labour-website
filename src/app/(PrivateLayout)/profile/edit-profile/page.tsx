import EditProfileComponent from '@/components/cui/EditProfileConponent'
import React from 'react'

const EditProfile = () => {
  return (
    <div className='maxWidth'>
      <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-gray-600 pb-12'>Edit Profile</h2>
      <EditProfileComponent />
    </div>
  )
}

export default EditProfile