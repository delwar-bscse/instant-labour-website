"use client"

import React, { Suspense, useEffect } from 'react'
import PostedJobList from '@/components/cui/PostedJobList';
import BookingList from '@/components/cui/BookingList';
import CustomButton from '@/components/cui/CustomButton';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const profileSidebar = [
  {
    id: 1,
    title: "My Posted Job",
    query: "posted-job"
  },
  {
    id: 2,
    title: "My Bookings",
    query: "booking-list"
  },
];

function PostedJobPageSuspense () {
  // const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const type = searchParams.get("type") || "posted-job";

  useEffect(() => (console.log(pathname)), [pathname])


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
      <div className='flex justify-between items-center'>
        <ul className='flex gap-4'>
          {profileSidebar?.map((item) => (
            <li onClick={() => router.push(`${pathname}?type=${item.query}`)} key={item.id} className={` gap-2 py-2 cursor-pointer rounded-sm px-3 shadow font-semibold text-center border-2 border-brandClr1 ${item.query === type ? "bg-brandClr1 text-gray-50" : "bg-white text-gray-800"}`}>
              {item.title}
            </li>
          ))}
        </ul>
        {type === "posted-job" && <div className='flex items-center justify-end pb-2'>
          <div className='w-full max-w-50'>
            <CustomButton text="+ Post a job" url="/employer/posted-job/post-job" variant="button01" className='w-full border-2 border-brandClr2' />
          </div>
        </div>}
      </div>

      <div className='w-full'>
        {type === "posted-job" && <PostedJobList />}
        {type === "booking-list" && <BookingList />}
      </div>

    </div>
  )
}


export const PostedJobPage = () =>{
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostedJobPageSuspense />
    </Suspense>
  );
}

export default PostedJobPage