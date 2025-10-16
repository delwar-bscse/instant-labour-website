/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { aboutHeroImg } from '@/assets/assets'
import CustomButton from '@/components/cui/CustomButton'
import { aboutUsData } from '@/data/aboutUsData'
import { getUserRoleEmployer, getUserRoleWorker } from '@/utils/getUserRole'
import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import React from 'react'
// import { toast } from 'sonner'

const AboutUs = () => {
  // const router = useRouter();

  // const handlePost = () => {
  //   if (getUserRoleEmployer()) {
  //     router.push("/employer/posted-job/post-job");
  //   } else {
  //     toast.error("Please login first");
  //   }
  // }

  return (
    <div className=''>
      {/* --------------------- About Hero Section --------------------- */}
      <div className=" py-20 bg-[#0057DC]">
        <div className="maxWidth flex flex-col-reverse sm:flex-row items-center justify-between gap-16 md:gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl text-gray-50 font-semibold capitalize">Connecting Talent with Opportunity, Seamlessly</h1>
            <p className="text-gray-100 mt-4">We make it simple for employers and skilled professionals to connect, collaborate, and complete projects — all in one trusted platform</p>
            <div className="flex gap-4 w-full max-w-50">
              <CustomButton text="Contact" url="/contact-us" variant="button01" />
            </div>
          </div>
          <div className="basis-1/2 flex justify-center items-center relative">
            <Image src={aboutHeroImg} alt="Hero Image" width={1000} height={1000} className='w-full relative bottom-10' />
            <Image src={aboutHeroImg} alt="Hero Image" width={1000} height={1000} className='w-full absolute top-10' />
          </div>
        </div>
      </div>

      {/* --------------------- About Us Content --------------------- */}
      <div className='maxWidth py-20 space-y-16'>
        <SubComponent item={aboutUsData.whoWeAre} position="right" />
        <SubComponent item={aboutUsData.ourMission} position="left" />
        <SubComponent item={aboutUsData.whatWeDo} position="right" />
        <SubComponent item={aboutUsData.whyChooseInstantLabour} position="left" />
        <SubComponent item={aboutUsData.ourVision} position="right" />
      </div>

      {/* --------------------- About Us Content --------------------- */}
      <div className='bg-[#72A1E9]'>
        <div className="maxWidth flex flex-col items-center justify-center gap-8 py-20">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-gray-50 font-semibold capitalize">Ready To Get Start ?</h1>
          {/* <div className="flex justify-center gap-6 w-full max-w-80">
            {!getUserRoleWorker() && <div>
              <CustomButton text="I'm hiring" url="/workers" variant="button01" /></div>}
            {!getUserRoleEmployer() && <div>
              <CustomButton text="I need a job" url="/jobs" variant="button01" /></div>}
          </div> */}
          <div className="flex flex-wrap justify-center gap-6">
            {!getUserRoleWorker() && <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/workers" className="font-semibold text-gray-800">Im Hiring</Link>
            </div>}

            {!getUserRoleEmployer() && <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/workers" className="font-semibold text-gray-800">I Need A Job</Link>
            </div>}

            {!getUserRoleWorker() && <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/workers" className="font-semibold text-gray-800">Instant Labour</Link>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}


{/* ------------- About Us Content Sub Component ------------- */ }
const SubComponent = ({ item, position }: { item: Record<string, any>, position: string }) => {

  return (
    <div className={`flex flex-col gap-8 lg:gap-16  ${position === "right" ? "md:flex-row" : "md:flex-row-reverse"}`}>
      <div className='flex-1'>
        <h3 className='font-semibold text-4xl text-gray-800'>{item.title}</h3>
        {Array.isArray(item.content) ? (
          <ul className='list-disc pl-8'>
            {item.content.map((i: string, index: number) => (
              <li key={index} className="text-gray-600 mt-4">
                {i}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 mt-4">{item.content}</p>
        )}
      </div>
      <div className='flex-1'>
        <Image src={item.img} alt="Hero Image" width={1000} height={600} className={`w-full h-[260px] md:h-[300px] lg:h-[360px] object-cover ${position === "right" ? "rounded-bl-2xl rounded-tr-2xl" : "rounded-br-2xl rounded-tl-2xl"}`} />
      </div>
    </div>
  )
}

export default AboutUs