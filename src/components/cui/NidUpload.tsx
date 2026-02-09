"use client"

import { formatUrl } from '@/utils/formatUrl'
import { myFetch } from '@/utils/myFetch'
import { updateImage } from '@/utils/updateImages'
import dayjs from 'dayjs'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FiUpload } from 'react-icons/fi'

const NidUpload = () => {
  const [nidFornt, setNidFornt] = useState<string>();
  const [nidBack, setNidBack] = useState<string>();
  const [nationality, setNationality] = useState<string>("british");
  const [insuranceNumber, setInsuranceNumber] = useState<string>("");
  const [workerNumber, setWorkerNumber] = useState<string>("");
  const [dathOfBirth, setDathOfBirth] = useState<string>("");

  const fetchProfile = async () => {
    const res = await myFetch(`/user/profile`,)
    console.log("Get profile Data : ", res);
    const nidFront = formatUrl(res?.data?.nidFront);
    const nidBack = formatUrl(res?.data?.nidBack);
    setNidFornt(nidFront);
    setNidBack(nidBack);
    const nationality = res?.data?.isBritish ? "british" : "non-british";
    setNationality(nationality);
    if (res?.data?.isBritish) {
      setInsuranceNumber(res?.data?.insuranceNumber || "")
    } else {
      setWorkerNumber(res?.data?.shareCode || "")
      setDathOfBirth(dayjs(res?.data?.dateOfBirth).format("YYYY-MM-DD") || "")
    } 
  }
  useEffect(() => {
    fetchProfile();
  }, []);

  const handleNidFornt = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setNidFornt(url);
    updateImage({ image: file, type: "nidFront" })
  }

  const handleNidBack = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setNidBack(url);
    updateImage({ image: file, type: "nidBack" })
  }

  const activeStyle = (value: string) => {
    if (nationality === value) {
      return 'bg-[#FFC823] border border-[#FFC823]';
    } else {
      return 'border border-gray-500';
    }
  }

  const handleSubmit = async () => {
    console.log(nationality, insuranceNumber, workerNumber, dathOfBirth);
    const payload: any = {}
    if (nationality === "british") {
      payload.isBritish = true;
      payload.insuranceNumber = insuranceNumber;
    } else {
      payload.isBritish = false;
      payload.shareCode = workerNumber;
      payload.dateOfBirth = dathOfBirth;
    }

    const res = await myFetch(`/user/profile`, {
      method: "PATCH",
      body: payload
    })

    console.log("Verification Update : ", res)
  }

  return (
    <div className='min-h-[600px] space-y-4 w-full max-w-[740px] '>
      <div className='space-y-2'>
        <p className='font-semibold text-2xl text-gray-800'>Select Method</p>
        <div className='flex flex-col sm:flex-row gap-3 w-full'>
          <button onClick={() => setNationality("british")} className={`${activeStyle('british')} w-full px-3 py-2 rounded-md font-semibold text-gray-700 transition-colors duration-300 cursor-pointer`}>British Nationals</button>
          <button onClick={() => setNationality("non-british")} className={`${activeStyle('non-british')} w-full px-3 py-2 rounded-md font-semibold text-gray-700 transition-colors duration-300 cursor-pointer`}>Non British Nationals</button>
        </div>
      </div>
      <div className='flex items-center flex-wrap gap-4'>
        <div className='relative w-90 h-40 sm:h-45 md:h-50'>
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
        <div className='relative w-90 h-40 sm:h-45 md:h-50'>
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
      <div className='space-y-4'>
        {nationality === "british" && <div className='space-y-2'>
          <p className='font-semibold text-lg text-gray-700 capitalize'>national insurance number</p>
          <input onChange={(e) => setInsuranceNumber(e.target.value)} value={insuranceNumber} className='border border-gray-300 rounded-md px-3 py-2 w-full' type="text" placeholder='Enter your NIN' />
        </div>}
        {nationality === "non-british" && <div className='space-y-2'>
          <p className='font-semibold text-lg text-gray-700 capitalize'>a share code(right to work)</p>
          <input onChange={(e) => setWorkerNumber(e.target.value)} value={workerNumber} className='border border-gray-300 rounded-md px-3 py-2 w-full' type="text" placeholder='Enter your NIN' />
        </div>}
        {nationality === "non-british" && <div className='space-y-2'>
          <p className='font-semibold text-lg text-gray-700 capitalize'>D.O.B</p>
          <input type="date" onChange={(e) => setDathOfBirth(e.target.value)} value={dathOfBirth} className='border border-gray-300 rounded-md px-3 py-2 w-full' placeholder='Enter your NIN' />
        </div>}
        <div>
          <button onClick={handleSubmit} className='bg-[#FFC823] hover:bg-[#FFC823]/90 w-full px-3 py-3 rounded-md font-semibold text-gray-700 transition-colors duration-300 cursor-pointer'>Confirm</button>
        </div>
      </div>

    </div>
  )
}

export default NidUpload