"use client"
import { mapImg } from '@/assets/assets'
import { CustomFilter } from '@/components/cui/CustomFilter'
import { CustomSearchBar } from '@/components/cui/CustomSearchBar'
import { CustomModal } from '@/components/modal/CustomModal'
import Image from 'next/image'
import { FaBars } from "react-icons/fa6";


const Jobs = () => {


  return (
    <div className='maxWidth'>
      <div>
        <Image src={mapImg} width={1000} height={400} alt="Map" className='w-full h-[400px]' />
      </div>
      <div className='flex items-center gap-4 py-4'>
        <div className='flex-1'>
          <CustomSearchBar placeholder="Search by location" query="location" />
        </div>

        {/* --------------- Jobs Filter Options --------------- */}
        <CustomModal
          title="Jobs Filter Options"
          trigger={<button className='border border-gray-400 p-3 text-gray-500 rounded-full cursor-pointer'>
            <FaBars className='text-xl' />
          </button>}
        >
          <CustomFilter />
        </CustomModal>
      </div>
    </div>
  )
}

export default Jobs