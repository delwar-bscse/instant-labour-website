// "use client"
import { myFetch } from '@/utils/myFetch'
import React from 'react'

const PrivacyPolicy = async() => {
  const res = await myFetch(`/public/privacy-policy`, {
    method: "GET",
  })
  //console.log("Privacy Policy : ", res)

  return (
    <div className='maxWidth min-h-screen'>
      <div
        className="prose jodit-wysiwyg"
        dangerouslySetInnerHTML={{ __html: res?.data?.content ?? "" }}
      />
    </div>
  )
}

export default PrivacyPolicy