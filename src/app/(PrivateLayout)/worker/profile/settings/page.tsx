"use client"
import React, { useEffect, useState } from 'react'
import { VscLock } from "react-icons/vsc";
import ChangePassword from '@/components/cui/ChangePassword';
import DeleteAccount from '@/components/cui/DeleteAccount';
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiUserCircle } from 'react-icons/bi';
import { MdOutlineLogout } from "react-icons/md";
import EmployeeWorkerProfile from '@/components/cui/EmployeeWorkerProfile';
import { useRouter } from 'next/navigation';
import Image, { StaticImageData } from 'next/image';
import { workerDetails } from '@/data/workerDatas';
import { IoCameraOutline } from "react-icons/io5";

const profileSidebar = [
  {
    id: 1,
    title: "Personal Information",
    icon: <BiUserCircle className='text-gray-700 text-xl' />,
  },
  {
    id: 2,
    title: "Change Password",
    icon: <VscLock className='text-gray-700 text-xl' />,
  },
  {
    id: 3,
    title: "Delete Account",
    icon: <RiDeleteBin6Line className='text-gray-700 text-xl' />,
  },
];

const WorkerSettings = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [profileImage, setProfileImage] = useState<string | StaticImageData>(workerDetails.workerImg);
  const [coverImage, setCoverImage] = useState<string | StaticImageData>(workerDetails.workerCover);

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




  useEffect(() => {
    const getUser = async () => {
      // const response = await myFetch("/users/my-profile", {
      //   method: "GET",
      //   tags: ["user"]
      // });
      // console.log("Profile User Data:", response);
      // setUser(response?.data);
    };
    getUser();
  }, []);

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

      {/* ------------------- Settings ------------------- */}
      <div className='maxWidth flex flex-col md:flex-row gap-8 py-8'>
        <div>
          <ul className='flex flex-row justify-center md:flex-col gap-4'>
            {profileSidebar?.map((item) => (
              <li onClick={() => setStep(item.id)} key={item.id} className={`max-md:max-w-[240px] md:w-[240px] flex items-center gap-2 py-2 cursor-pointer  hover:bg-[#FFECAC] rounded-sm px-3 shadow ${item.id === step ? "bg-[#FFECAC]" : "bg-white"}`}>
                <span>
                  {item.icon}
                </span>
                <span className='text-lg font-semibold text-gray-600 hidden md:block'>{item.title}</span>
              </li>
            ))}
            <li onClick={() => router.push("/login")} className={`max-md:max-w-[240px] md:w-[240px] flex items-center gap-2 py-2 cursor-pointer  hover:bg-[#FFECAC] rounded-sm px-3 shadow bg-white`}>
              <span>
                <MdOutlineLogout className='text-gray-700 text-xl' />
              </span>
              <span className='text-lg font-semibold text-gray-600 hidden md:block'>Log Out</span>
            </li>
          </ul>
        </div>

        <div className='w-full'>
          {step === 1 && <EmployeeWorkerProfile />}
          {step === 2 && <ChangePassword />}
          {step === 3 && <DeleteAccount />}
        </div>

      </div>
    </div>
  )
}

export default WorkerSettings