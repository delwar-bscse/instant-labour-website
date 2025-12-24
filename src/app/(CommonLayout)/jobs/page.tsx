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
  const newSearchParams = await searchParams;

  // const category = newSearchParams.category || "";
  // const subCategory = newSearchParams.subCategory || "";
  // const price = newSearchParams.price || "";
  // const radius = newSearchParams.radius || "";
  // const salaryType = newSearchParams.salaryType || "";
  // const location = newSearchParams.location || "";

  const page = newSearchParams?.page || 1;
  const limit = newSearchParams?.pageSize || 10;

  // const res = await myFetch(`/job?page=${page}&limit=${limit}&category=${category}&subCategory=${subCategory}&salaryType=${salaryType}&maxSalary=${price}&radius=${radius}&address=${location}`);

  const res = await myFetch(`/job?page=${page}&limit=${limit}`);

  const jobDatas = res?.data || [];
  const meta: any = res?.pagination || {};
  console.log("Job get res : ", jobDatas);
  console.log("Job meta res : ", res);


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