
import ContactUsSection from '@/components/sections/ContactUsSection'
import { sectionTypeEnum } from '@/types/types'
import { filteredSectionData } from '@/utils/filteredSectionData'
import { formatUrl } from '@/utils/formatUrl'
import { myFetch } from '@/utils/myFetch'
import Image from 'next/image'
import React from 'react'

const ContactUs = async() => {

  const res = await myFetch("/content/section/contact");
  console.log("Contact : ", res);

  const contactHero = filteredSectionData({ data: res?.data, section: sectionTypeEnum.CONTACT_US });

  return (
    <div>
      {/* --------------------- Contact Hero Section --------------------- */}
      <div className="maxWidth flex flex-col-reverse sm:flex-row items-center justify-between gap-8 py-20">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-gray-700 font-semibold capitalize">{contactHero?.title}</h1>
          <p className="text-gray-600 mt-4">{contactHero?.description}</p>
        </div>
        <div className="basis-[40%] flex justify-center items-center">
          <Image src={formatUrl(contactHero?.images?.[0])} alt="Hero Image" width={1000} height={600} className='w-full h-full max-h-80 object-cover' />
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