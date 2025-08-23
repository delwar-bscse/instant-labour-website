"use client"
import { mapImg } from '@/assets/assets'
import { CustomFilter } from '@/components/cui/CustomFilter'
import { CustomSearchBar } from '@/components/cui/CustomSearchBar'
import { CustomModal } from '@/components/modal/CustomModal'
import { jobDatas } from '@/data/jobDatas'
import Image from 'next/image'
import { FaBars } from "react-icons/fa6";
import CustomPagination from '@/components/cui/CustomPagination'
import JobPostCard from '@/components/card/JobPostCard'


const Jobs = () => {


  return (
    <div className='maxWidth'>
      {/* --------------- Google Map --------------- */}
      <div>
        <Image src={mapImg} width={1000} height={400} alt="Map" className='w-full h-[400px]' />
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
          {jobDatas?.map((item) => (
            <JobPostCard key={item._id} item={item} url={`/jobs/${item._id}`} />
          ))}
        </div>
      </div>
      
      {/* --------------- Jobs --------------- */}
      <div className='py-12'>
        <CustomPagination TOTAL_PAGES={10} />
      </div>

    </div>
  )
}

export default Jobs