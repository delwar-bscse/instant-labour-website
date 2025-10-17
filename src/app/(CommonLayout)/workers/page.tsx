"use client"
import { heroWorkerImg, mapImg } from '@/assets/assets'
import { CustomFilter } from '@/components/cui/CustomFilter'
import { CustomSearchBar } from '@/components/cui/CustomSearchBar'
import { CustomModal } from '@/components/modal/CustomModal'
import Image from 'next/image'
import { FaBars } from "react-icons/fa6";
import CustomPagination from '@/components/cui/CustomPagination'
import WorkerCard from '@/components/card/workerCard'
import { workerDatas } from '@/data/workerDatas'
import { Button } from '@/components/ui/button'
import { getUserRoleEmployer } from '@/utils/getUserRole'
import { toast } from 'sonner'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'


const WorkersSuspense = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const workers = searchParams.get("workers");

  const handlePost = () => {
    if (getUserRoleEmployer()) {
      router.push("/employer/posted-job/post-job");
    } else {
      toast.error("Please login first");
    }
  }


  return (
    <div className='maxWidth'>
      {/* --------------------- Hero Worker Section --------------------- */}
      {getUserRoleEmployer() && <>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 py-20">
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl text-gray-800 font-bold leading-20 capitalize">find labour for <br />your short-term <br />or day job</h1>
            <p className="text-gray-600 mt-4">connects with local labour available now for temporary work.</p>
            {workers !== "instantLabour" && <div className='max-w-[200px] mt-12'>
              <Button onClick={handlePost} variant="yelloBtn" className='w-full md:h-11'>Post A Job</Button>
            </div>}
          </div>
          <div className="flex justify-center items-center">
            <Image src={heroWorkerImg} alt="Hero Image" width={1000} height={1000} className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-full' />
          </div>
        </div>

        {/* --------------------- Available Labour Banner --------------------- */}
        <div className='bg-[#548EE8] py-2 mb-12'>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-gray-50 text-center capitalize'>available labour</h2>
        </div>
      </>}

      {/* --------------- Google Map --------------- */}
      <div>
        <Image src={mapImg} width={1000} height={400} alt="Map" className='w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover' />
      </div>

      {/* --------------- Search and Jobs Filter Options --------------- */}
      <div className='flex items-center gap-4 py-8'>
        <div className='flex-1'>
          <CustomSearchBar placeholder="Search by location" query="location" />
        </div>
        <CustomModal
          title="Workers Filter Options"
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
            <div onClick={() => { document.getElementById("workerCardCommon")?.click() }} key={item._id} className='space-y-2 bg-white hover:bg-gray-50 customShadow p-4 cursor-pointer transition-colors duration-100'>
              <WorkerCard item={item} />
              {/* <CustomButton text="View Profile" url={`/workers/${item._id}`} variant="button01" className='w-full' /> */}
              <Link id='workerCardCommon' href={`/workers/${item._id}`} className='hidden'></Link>
            </div>
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

export const Workers = () =>{
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkersSuspense />
    </Suspense>
  );
}

export default Workers