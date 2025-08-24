"use client"
import React, { useEffect, useState } from 'react'
import PostedJobList from '@/components/cui/PostedJobList';
import BookingList from '@/components/cui/BookingList';

const profileSidebar = [
  {
    id: 1,
    title: "Posted Job",
  },
  {
    id: 2,
    title: "Booking List",
  },
];

const PostedJobPage = () => {
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
    <div className='maxWidth flex flex-col gap-8 py-8'>
      <div>
        <ul className='flex gap-4'>
          {profileSidebar?.map((item) => (
            <li onClick={() => setStep(item.id)} key={item.id} className={` gap-2 py-2 cursor-pointer rounded-sm px-3 shadow font-semibold text-center ${item.id === step ? "bg-brandClr1 text-gray-50" : "bg-white"}`}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className='w-full'>
        {step === 1 && <PostedJobList />}
        {step === 2 && <BookingList />}
      </div>

    </div>
  )
}

export default PostedJobPage