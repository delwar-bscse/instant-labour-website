import { contactHeroImg } from '@/assets/assets'
import ContactUsSection from '@/components/sections/ContactUsSection'
import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
  return (
    <div>

      {/* --------------------- Contact Hero Section --------------------- */}
      <div className="maxWidth flex flex-col-reverse sm:flex-row items-center justify-between gap-8 py-20">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-gray-700 font-semibold capitalize">Let’s Connect and Build Something Great.</h1>
          <p className="text-gray-600 mt-4">Whether you have questions, feedback, or a new project in mind, our team is here to help.</p>
        </div>
        <div className="basis-[40%] flex justify-center items-center">
          <Image src={contactHeroImg} alt="Hero Image" width={1000} height={600} className='w-full object-cover' />
        </div>
      </div>
      {/* --------------------- Contact Us --------------------- */}
      <div className='pb-20'>
        <ContactUsSection />
      </div>
    </div>
  )
}

export default ContactUs