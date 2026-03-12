// import { aboutHeroImg } from '@/assets/assets'
import CustomButton from '@/components/cui/CustomButton'
import { sectionTypeEnum } from '@/types/types'
import { filteredSectionData } from '@/utils/filteredSectionData'
import { formatUrl } from '@/utils/formatUrl'
import { getUserRoleEmployer, getUserRoleWorker } from '@/utils/getUserRoleServer'
import { myFetch } from '@/utils/myFetch'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUs = async () => {
  const isEmployer = await getUserRoleEmployer();
  const isWorker = await getUserRoleWorker();

  const res = await myFetch("/content/section/about");
  //console.log("About : ", res);

  const aboutHero = filteredSectionData({ data: res?.data, section: sectionTypeEnum.ABOUT_HERO });
  const whoWeAre = filteredSectionData({ data: res?.data, section: sectionTypeEnum.WHO_WE_ARE });
  const ourMission = filteredSectionData({ data: res?.data, section: sectionTypeEnum.OUR_MISSION });
  const ourVision = filteredSectionData({ data: res?.data, section: sectionTypeEnum.OUR_VISION });
  const whereWeOperate = filteredSectionData({ data: res?.data, section: sectionTypeEnum.WHERE_WE_OPERATE });
  const aboutWhyUs = filteredSectionData({ data: res?.data, section: sectionTypeEnum.ABOUT_WHY_US });

  //console.log("About ---- : ", whoWeAre);

  return (
    <div className=''>
      {/* --------------------- About Hero Section --------------------- */}
      <div className=" py-20 bg-brandClr1">
        <div className="maxWidth flex flex-col-reverse sm:flex-row items-center justify-between gap-16 md:gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl text-gray-50 font-semibold capitalize">{aboutHero?.title}</h1>
            <p className="text-gray-100 mt-4">{aboutHero?.description}</p>
            <div className="flex gap-4 w-full max-w-50">
              <CustomButton text="Contact" url="/contact-us" variant="button01" />
            </div>
          </div>
          <div className="basis-1/2 flex justify-center items-center relative">
            <Image src={formatUrl(aboutHero?.images?.[0])} alt="Hero Image" width={1000} height={1000} className='w-full h-65 md:h-75 lg:h-100 object-cover relative bottom-10' />
            {/* <Image src={aboutHeroImg} alt="Hero Image" width={1000} height={1000} className='w-full absolute top-10' /> */}
          </div>
        </div>
      </div>

      {/* --------------------- About Us Content --------------------- */}
      <div className='maxWidth py-20 space-y-16'>
        <SubComponent item={whoWeAre} position="right" />
        <SubComponent item={ourMission} position="left" />
        <SubComponent item={whereWeOperate} position="right" />
        <SubComponent item={aboutWhyUs} position="left" />
        <SubComponent item={ourVision} position="right" />
      </div>

      {/* --------------------- About Us Content --------------------- */}
      <div className='bg-[#72A1E9]'>
        <div className="maxWidth flex flex-col items-center justify-center gap-8 py-20">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-gray-50 font-semibold capitalize">Ready To Get Started ?</h1>
          <div className="flex flex-wrap justify-center gap-6">
            {!isWorker && <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/workers" className="font-semibold text-gray-800">Im Hiring</Link>
            </div>}

            {!isEmployer && <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/jobs" className="font-semibold text-gray-800">I Need A Job</Link>
            </div>}

            {!isWorker && <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/workers?type=instantLabour" className="font-semibold text-gray-800">Instant Labour</Link>
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
        {Array.isArray(item.description) ? (
          <ul className='list-disc pl-8'>
            {item.description.map((i: string, index: number) => (
              <li key={index} className="text-gray-600 mt-4">
                {i}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 mt-4">{item.description}</p>
        )}
      </div>
      <div className='flex-1'>
        <Image src={formatUrl(item?.images?.[0])} alt="Hero Image" width={1000} height={600} className={`w-full h-65 md:h-75 lg:h-90 object-cover ${position === "right" ? "rounded-bl-2xl rounded-tr-2xl" : "rounded-br-2xl rounded-tl-2xl"}`} />
      </div>
    </div>
  )
}

export default AboutUs