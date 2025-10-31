"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { FiUpload } from 'react-icons/fi'

const NidUpload = () => {
  const [nidFornt, setNidFornt] = useState<string>();
  const [nidBack, setNidBack] = useState<string>();

  const handleNidFornt = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setNidFornt(url);
  }

  const handleNidBack = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setNidBack(url);
  }

  return (
    <div className='flex items-center justify-center flex-wrap gap-4'>
      <div className='relative w-[360px] h-[160px] sm:h-[180px] md:h-[200px]'>
        {nidFornt ? (
          <Image src={nidFornt} width={300} height={100} alt="nidFornt" className=' object-cover w-full h-full' />
        ) : (
          <div className='w-full h-full flex items-center justify-center bg-gray-200'>
            <span className='text-gray-600 font-semibold text-xl'>Upload National ID Front</span>
          </div>
        )}
        <div onClick={() => document.getElementById("nidForntImg")?.click()} className='w-6 h-6 md:w-8 md:h-8 rounded-full border bg-[#E6EEFC] flex items-center justify-center absolute top-0 right-0 transform -translate-x-1/2 translate-y-1/2'>
          <FiUpload className='text-gray-700 text-lg md:text-xl' />
        </div>
        <input id="nidForntImg" type="file" accept='image/*' onChange={handleNidFornt} className='hidden' />
      </div>
      <div className='relative w-[360px] h-[160px] sm:h-[180px] md:h-[200px]'>
        {nidBack ? (
          <Image src={nidBack} width={300} height={100} alt="nidFornt" className=' object-cover w-full h-full' />
        ) : (
          <div className='w-full h-full flex items-center justify-center bg-gray-200'>
            <span className='text-gray-600 font-semibold text-xl'>Upload National ID Back</span>
          </div>
        )}
        <div onClick={() => document.getElementById("nidBackImg")?.click()} className='w-6 h-6 md:w-8 md:h-8 rounded-full border bg-[#E6EEFC] flex items-center justify-center absolute top-0 right-0 transform -translate-x-1/2 translate-y-1/2'>
          <FiUpload className='text-gray-700 text-lg md:text-xl' />
        </div>
        <input id="nidBackImg" type="file" accept='image/*' onChange={handleNidBack} className='hidden' />
      </div>
    </div>
  )
}

export default NidUpload