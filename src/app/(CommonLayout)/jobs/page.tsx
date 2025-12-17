/* eslint-disable @typescript-eslint/no-explicit-any */

import { mapImg } from '@/assets/assets'
import { CustomFilter } from '@/components/cui/CustomFilter'
import { CustomSearchBar } from '@/components/cui/CustomSearchBar'
import { CustomModal } from '@/components/modal/CustomModal'
// import { jobDatas } from '@/data/jobDatas'
import Image from 'next/image'
import { FaBars } from "react-icons/fa6";
import CustomPagination from '@/components/cui/CustomPagination'
import { myFetch } from '@/utils/myFetch'
import JobPostCard from '@/components/card/JobPostCard'


const Jobs = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const mainSearchParams = await searchParams;
  console.log("Main Search Params : ", mainSearchParams);
  // const category = mainSearchParams?.category || null;
  // const subCategory = mainSearchParams?.subCategory || null;
  // const location = mainSearchParams?.location || null;
  // const price = mainSearchParams?.price || null;
  // const radius = mainSearchParams?.radius || null;
  const page = mainSearchParams?.page || 1;
  const limit = mainSearchParams?.pageSize || 10;
  // const res = await myFetch(`/job?category=${category}&subCategory=${subCategory}&location=${location}&price=${price}&radius=${radius}`);

  const res = await myFetch(`/job?page=${page}&limit=${limit}`);
  const jobDatas = res?.data || [];
  const meta:any = res?.pagination || {};
  console.log("Job get res : ", jobDatas);


  return (
    <div className='maxWidth'>
      {/* --------------- Google Map --------------- */}
      <div>
        <Image src={mapImg} width={1000} height={400} alt="Map" className='w-full h-50 sm:h-75 md:h-100 object-cover' />
      </div>

      {/* --------------- Search and Jobs Filter Options --------------- */}
      <div className='flex items-center gap-4 py-8'>
        <div className='flex-1'>
          <CustomSearchBar placeholder="Search by location" query="location" />
        </div>
        <CustomModal
          title="Jobs Filter Options"
          trigger={<button className='border border-gray-400 p-3 text-gray-500 rounded-full cursor-pointer'>
            <FaBars className='text-xl' />
          </button>}
        >
          <CustomFilter />
        </CustomModal>
      </div>

      {/* --------------- Jobs --------------- */}
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {jobDatas && jobDatas?.map((item: any, index: number) => (
            <JobPostCard key={index} item={item} url={`/jobs/${item._id}`} />
          ))}
        </div>
      </div>

      {/* --------------- Jobs --------------- */}
      <div className='py-12'>
        <CustomPagination TOTAL_PAGES={meta?.totalPages} />
      </div>

    </div>
  )
}

export default Jobs