"use client"
import React, { useEffect, useState } from 'react'
import { VscLock } from "react-icons/vsc";
// import { deleteCookie } from "cookies-next/client";
// import { toast } from 'sonner';
import ChangePassword from '@/components/cui/ChangePassword';
import DeleteAccount from '@/components/cui/DeleteAccount';
import { RiDeleteBin6Line } from "react-icons/ri";

const profileSidebar = [
  {
    id: 1,
    title: "Change Password",
    icon: <VscLock className='text-gray-700 text-xl' />,
  },
  {
    id: 2,
    title: "Delete Account",
    icon: <RiDeleteBin6Line className='text-gray-700 text-xl' />,
  },
];

const Settings = () => {
  const [step, setStep] = useState(1);
  // const [user, setUser] = useState<any>(null);


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
    <div className='maxWidth flex flex-col md:flex-row gap-8 py-8'>
      <div>
        <ul className='flex flex-col gap-4'>
          {profileSidebar?.map((item) => (
            <li onClick={() => setStep(item.id)} key={item.id} className={`w-[220px] flex items-center gap-2 py-2 cursor-pointer  hover:bg-[#FFECAC] rounded-sm px-3 shadow ${item.id === step ? "bg-[#FFECAC]" : "bg-white"}`}>
              <span>
                {item.icon}
              </span>
              <span className='text-lg font-semibold text-gray-600'>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='w-full'>
        {step === 1 && <ChangePassword />}
        {step === 2 && <DeleteAccount />}
      </div>

    </div>
  )
}

export default Settings