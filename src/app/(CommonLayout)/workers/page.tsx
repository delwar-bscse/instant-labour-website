"use client"
import { heroWorkerImg, mapImg } from '@/assets/assets'
import { CustomFilter } from '@/components/cui/CustomFilter'
import { CustomSearchBar } from '@/components/cui/CustomSearchBar'
import { CustomModal } from '@/components/modal/CustomModal'
import Image from 'next/image'
import { FaBars } from "react-icons/fa6";
import CustomPagination from '@/components/cui/CustomPagination'
import CustomButton from '@/components/cui/CustomButton'
import WorkerCard from '@/components/card/workerCard'
import { workerDatas } from '@/data/workerDatas'


const Workers = () => {


  return (
    <div className='maxWidth'>
      {/* --------------------- Hero Worker Section --------------------- */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 py-20">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-gray-700 font-semibold capitalize">find labour for your short-term or day job</h1>
          <p className="text-gray-600 mt-4">connects with local labour available now for temporary work.</p>
          <div className="flex gap-4 w-full max-w-50">
            <CustomButton text="Post a job" url="/workers" variant="button01" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={heroWorkerImg} alt="Hero Image" width={1000} height={1000} className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-full' />
        </div>
      </div>

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

      {/* --------------- Workers --------------- */}
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {workerDatas?.map((item) => (
            <WorkerCard key={item._id} item={item} url={`/workers/${item._id}`} />
          ))}
        </div>
      </div>

      {/* --------------- Pagination --------------- */}
      <div className='py-12'>
        <CustomPagination TOTAL_PAGES={10} />
      </div>

    </div>
  )
}

export default Workers