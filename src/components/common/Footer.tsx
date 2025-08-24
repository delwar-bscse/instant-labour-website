import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { contactInfo, followUs, quickLinks } from '@/constants/footerDatas';
import FooterTitle from '../cui/FooterTitle';
import { brandLogo } from '@/assets/assets';


const Footer = () => {
  return (
    <div className='bg-brandClr1 text-white'>
      <div className='maxWidth flex-1 flex flex-col lg:flex-row gap-12 lg:gap-4 py-12'>
        <div className='lg:basis-[50%] pt-8 space-y-8'>
          <h3>
            <Image src={brandLogo} alt="Blooming Brands" width={200} height={40} className='w-[200px]  object-fit' />
          </h3>
          <p className='flex items-center gap-2'>
            At [Platform Name], we connect businesses with skilled freelancers to get work done faster and better. Our platform makes it easy to find the right talent, hire with confidence, and collaborate smoothly. Whether you’re an employer looking for experts or a freelancer showcasing your skills, we help you work together for great results.
          </p>
        </div>
        <div className='lg:basis-[50%] flex flex-col sm:flex-row lg:justify-end gap-8 px-6'>
          <div>
            <FooterTitle title="Quick Links" />
            <ul className='space-y-3'>
              {quickLinks?.map((item, index) => (
                <li key={index} className='text-base cursor-pointer'>
                  <Link href={item?.url} className='hover:text-white text-white delay-200'>{item?.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FooterTitle title="Contact Info" />
            <ul className='space-y-2'>
              {contactInfo?.map((item, index) => (
                <li key={index} className='flex items-center gap-2'>
                  <span className='p-2 rounded-full'>{item?.icon}</span>
                  <span>{item?.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='h-[2px] w-full bg-gray-50'/>
      <div className='maxWidth flex justify-between items-center py-8'>
        <p>© 2025 [Platform Name]. All rights reserved.</p>
        <ul>
          {followUs?.map((item, index) => (
            <li key={index} className='inline-block mx-4'>
              <Link href={item?.url} className='hover:text-white text-white delay-200'>{item?.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer