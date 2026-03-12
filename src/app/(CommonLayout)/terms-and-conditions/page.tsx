import { myFetch } from '@/utils/myFetch'
import React from 'react'

const TermsAndConditions = async () => {
  const res = await myFetch(`/public/terms-and-condition`, {
    method: "GET",
  })
  //console.log("Terms and Condition : ", res)

  return (
    <div className='maxWidth min-h-screen'>
      <div
        className="prose jodit-wysiwyg"
        dangerouslySetInnerHTML={{ __html: res?.data?.content ?? "" }}
      />
    </div>
  )
}

export default TermsAndConditions