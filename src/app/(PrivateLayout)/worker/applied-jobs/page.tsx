"use client"
import React, { Suspense, useEffect } from 'react'
import ApplyJobList from '@/components/cui/ApplyJobList';
import OfferJobList from '@/components/cui/OfferJobList';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const profileSidebar = [
  {
    id: 1,
    title: "My Applied List",
    query: "my-applied-list"
  },
  {
    id: 2,
    title: "My Offers List",
    query: "my-offers-list"
  },
];

const AppliedJobPageSuspense = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // const [user, setUser] = useState<any>(null);
  const type = searchParams.get("type") || "my-applied-list";


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
            <li onClick={() => router.push(`${pathname}?type=${item.query}`)} key={item.id} className={` gap-2 py-2 cursor-pointer rounded-sm px-3 shadow font-semibold text-center border-2 border-brandClr1 ${item.query === type ? "bg-brandClr1 text-gray-50" : "bg-white text-gray-800"}`}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className='w-full min-h-[calc(100vh-200px)]'>
        {type === "my-applied-list" && <ApplyJobList />}
        {type === "my-offers-list" && <OfferJobList />}
      </div>

    </div>
  )
}

const AppliedJobPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppliedJobPageSuspense />
    </Suspense>
  );
}

export default AppliedJobPage