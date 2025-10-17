/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState } from 'react'
import EditProfileComponent from '@/components/cui/EditProfileConponent'
import Image from 'next/image'
import { IoCameraOutline } from 'react-icons/io5';
import { workerDetails } from '@/data/workerDatas';

const CompleteProfile = () => {
  const [profileImage, setProfileImage] = useState<any>(workerDetails.workerImg);
  const [coverImage, setCoverImage] = useState<any>(workerDetails.workerCover);

  const handleProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setProfileImage(url);
  };

  const handleCoverImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setCoverImage(url);
  };


  return (
    <div>
      {/* ------------------- Profile & Cover ------------------- */}
      <div className='maxWidth pt-4 pb-4'>
        <div className='relative'>
          <Image src={coverImage} width={1200} height={240} alt={workerDetails.name} className='w-full sm:h-[200px] md:h-[240px] object-fit' />
          <div onClick={() => document.getElementById("coverImageId")?.click()} className='w-6 h-6 md:w-8 md:h-8 rounded-full border bg-gray-500/50 flex items-center justify-center absolute bottom-7 right-0 transform -translate-x-1/2 translate-y-1/2'>
            <IoCameraOutline className='text-white text-lg md:text-xl' />
          </div>
          <input id="coverImageId" type="file" accept='image/*' onChange={handleCoverImage} className='hidden' />
          <div className='absolute bottom-0 left-6 md:left-16 rounded-full transform translate-y-1/2 bg-white/50'>
            <Image src={profileImage} width={320} height={320} alt={workerDetails.name} className='w-[100px] h-[100px] md:w-[160px] md:h-[160px] rounded-full' />

            <div onClick={() => document.getElementById("profileImageId")?.click()} className='w-6 h-6 md:w-8 md:h-8 rounded-full border bg-gray-500/50 flex items-center justify-center absolute bottom-6 md:bottom-8 -right-4 transform -translate-x-1/2 translate-y-1/2'>
              <IoCameraOutline className='text-white text-lg md:text-xl' />
            </div>
            <input id="profileImageId" type="file" accept='image/*' onChange={handleProfileImage} className='hidden' />
          </div>
        </div>
        <div className='h-[20px] md:h-[80px]' />
      </div>

      {/* ------------------- Personal Info ------------------- */}
      <div className='w-full max-w-[1100px] mx-auto px-4'>
        <EditProfileComponent />
      </div>
    </div>
  )
}

export default CompleteProfile