import React from 'react';
import Link from 'next/link';
import { contactInfo, followUs, quickLinks } from '@/constants/footerDatas';
import FooterTitle from '../cui/FooterTitle';


const Footer = () => {
  return (
    <div className='bg-brandClr1 text-white'>
      <div className='maxWidth flex-1 flex flex-col lg:flex-row gap-12 lg:gap-4 py-12'>
        <div className='lg:basis-[50%] space-y-8'>
          <div className='flex items-center text-4xl font-bold '>
            <span className='text-gray-50 tracking-wider'>Instant</span>
            <span className='text-brandClr2 tracking-wider'>Labour</span>
          </div>
          <p className='flex items-center gap-2'>
            At Instantlabour, we connect businesses with skilled freelancers to get work done faster and better. Our platform makes it easy to find the right talent, hire with confidence, and collaborate smoothly. Whether you’re an employer looking for experts or a freelancer showcasing your skills, we help you work together for great results.
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
            <ul className='space-y-3'>
              {contactInfo?.map((item, index) => (
                <li key={index} className='flex items-center gap-2'>
                  <span className=''>{item?.icon}</span>
                  <span>{item?.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='h-[2px] w-full bg-gray-50' />
      <div className='maxWidth flex flex-col-reverse md:flex-row justify-between items-center gap-2 py-8'>
        <p>© 2025 Instantlabour. All rights reserved.</p>
        <ul>
          {followUs?.map((item, index) => (
            <li
              key={index}
              className="inline-block mx-4 border border-white rounded-full p-1.5 md:p-2 cursor-pointer hover:bg-white/10 transition-colors duration-200"
            >
              <a target='_blank'
                href={item?.url}
                className="text-white hover:text-white text-xl md:text-2xl"
              >
                {item?.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer