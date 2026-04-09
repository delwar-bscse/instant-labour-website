

import Image from "next/image";
import { IoCheckmarkCircle } from "react-icons/io5";
import IndustriesSlider from "@/components/sections/IndustriesSlider";
import ClientSayCard from "@/components/card/ClientSayCard";
import FAQ from "@/components/sections/FAQ";
import { getUserRole, getUserRoleEmployer, getUserRoleWorker } from "@/utils/getUserRoleServer";
import { BsExclamationCircle } from "react-icons/bs";
import Link from "next/link";
import { CustomModal } from "@/components/modal/CustomModal";
import OfferSection from "@/components/sections/OfferSection";
import { myFetch } from "@/utils/myFetch";
import { formatUrl } from "@/utils/formatUrl";
import { filteredSectionData } from "@/utils/filteredSectionData";
import { sectionTypeEnum } from "@/types/types";


{/* --------------------- Components Start --------------------- */ }
const ForEmployersComponent = () => (
  <div>
    <ul className="list-disc list-outside pl-8 space-y-2 capitalize">
      <li>Post A Job In Seconds</li>
      <li>Browse Available Local Workers</li>
      <li>Review Profiles And Ratings</li>
    </ul>
    <p className="text-lg font-semibold pt-6 pb-2 capitalize">Need A worker Today?</p>
    <p className="capitalize">Post your job and connect with available workers in minutes.</p>
  </div>
)

const ForWorkersComponent = () => (
  <div className="max-h-90 overflow-y-auto scrollbar-hide">
    <div>
      <p className="capitalize pb-2">Looking for same-day or flexible work?</p>
      <p className="capitalize">InstantLabour makes it easy to browse local job opportunities, apply for roles, and connect directly with employers—all in one place.</p>

      <p className="text-lg font-semibold pt-6 pb-2 capitalize">Work on Your Terms</p>
      <ul className="list-disc list-outside pl-8 space-y-2 capitalize">
        <li>Browse and apply for jobs that fit your availability</li>
        <li>Choose when and where you work</li>
        <li>Connect directly with employers</li>
        <li>No phone calls, no agencies</li>
      </ul>
    </div>
  </div>
)

const InstantLabourComponent = () => (
  <div className="max-h-90 overflow-y-auto scrollbar-hide">
    <div>
      <p className="capitalize">Hire local labourers, cleaners, drivers, and more - fast. Instant Labour is a simple platform where employers and workers can connect directly, without agencies or phone calls.</p>
      <p className="text-lg font-semibold pt-6 pb-2 capitalize">Need A worker Today?</p>
      <p className="pb-2 capitalize">Instant Labour is a UK-based platform designed for urgent labour and short-term work opportunities.</p>
      <p className="pt-2 capitalize">Browse available workers and connect instantly - no need to post a job. Ideal for last-minute cover, urgent projects, or one-day tasks</p>
    </div>
  </div>
)
{/** --------------------- Components End --------------------- */ }

export default async function Home() {
  const isUser = await getUserRole();
  const isEmployer = await getUserRoleEmployer();
  const isWorker = await getUserRoleWorker();


  const resCoupon = await myFetch("/package/offer-data", { method: "GET" });
  const resClientReview = await myFetch("/clientreview", { method: "GET" });
  //console.log("What Our Client Says : ", resClientReview);

  const res = await myFetch("/content/section/home", { method: "GET" });
  //console.log("Home All : ", res);

  const homeHero = filteredSectionData({ data: res?.data, section: sectionTypeEnum.HERO });
  const howItWorksEmployer = filteredSectionData({ data: res?.data, section: sectionTypeEnum.HOW_IT_WORKS });
  const howItWorksWorker = filteredSectionData({ data: res?.data, section: sectionTypeEnum.HOW_IT_WORKS_WORKER });
  const howItWorks = isEmployer ? howItWorksEmployer : howItWorksWorker;
  const whyInstantLabour = filteredSectionData({ data: res?.data, section: sectionTypeEnum.WHY_US });

  return (
    <div>
      {/* --------------------- Hero Section --------------------- */}
      <div className="maxWidth flex flex-col-reverse sm:flex-row items-center justify-between gap-8 py-8 md:py-20">
        <div className="flex-1 space-y-6">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl text-gray-800 font-semibold capitalize">{homeHero?.title}</h1>
          <p className="text-gray-700 mt-4 font-semibold">{homeHero?.description}</p>

          {/* ---------------------Only Button & Button Modal --------------------- */}
          {isUser ? <div className="flex flex-wrap gap-4 w-full">

            {isEmployer && <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/workers" className="font-semibold text-gray-800">Im Hiring</Link>
            </div>}

            {isWorker && <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/jobs" className="font-semibold text-gray-800">I Need A Job</Link>
            </div>}

            {isEmployer && <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/workers?type=instantLabour" className="font-semibold text-gray-800">Instant Labour</Link>
            </div>}

          </div> : <div className="flex flex-wrap gap-4 w-full">

            <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/workers" className="font-semibold text-gray-800">Instant Labour</Link>
              {!isUser && <CustomModal
                title="Instant Labour - Find Workers Near You Fast."
                trigger={<BsExclamationCircle />}
              >
                <InstantLabourComponent />
              </CustomModal>}
            </div>

            <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/jobs" className="font-semibold text-gray-800">I Need A Job</Link>
              {!isUser && <CustomModal
                title="For Workers"
                trigger={<BsExclamationCircle />}
              >
                <ForWorkersComponent />
              </CustomModal>}
            </div>

            <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/workers" className="font-semibold text-gray-800">Im Hiring</Link>
              {!isUser && <CustomModal
                title="For Employers"
                trigger={<BsExclamationCircle />}
              >
                <ForEmployersComponent />
              </CustomModal>}
            </div>
          </div>
          }

        </div>
        <div className="flex justify-center items-center">
          <Image src={formatUrl(homeHero?.images?.[0] ?? "")} alt="Hero Image" width={1000} height={1000} className='w-75 h-75 lg:w-100 lg:h-100 object-cover rounded-full' />
        </div>
      </div>


      {/* -------------- guaranteed a response within 7-14 days. -------------- */}
      {!isEmployer && <div className="maxWidth">
        <div className="py-6 md:py-8 bg-brandClr2 rounded-md px-4 md:px-8">
          <h3 className="text-2xl md:text-3xl xl:text-5xl xxl:text-6xl text text-gray-700 font-semibold capitalize leading-12 md:leading-14 lg:leading-16 xl:leading-18 xxl:leading-20">All Applicants guaranteed a response within <br />7-14 days</h3>
        </div>
      </div>}

      {/* --------------------- How It Works --------------------- */}
      {isUser && <div className="maxWidth py-8 md:py-20">
        <h2 className="text-3xl lg:text-5xl text-gray-700 font-semibold capitalize mb-6">How it works</h2>
        <div className="flex flex-wrap gap-4 md:gap-8 xl:gap-12">
          {howItWorks?.content?.steps?.map((item: any, index: number) => (
            <div key={index} className="flex gap-3 w-62.5">
              <p className="text-white bg-brandClr1 w-10 h-10 flex justify-center items-center rounded-full font-semibold text-lg">{index + 1}</p>
              <div className="flex-1">
                <h3 className="font-semibold text-xl lg:text-2xl capitalize">{item.title}</h3>
                <p className="capitalize text-gray-500 ">{item.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>}


      {/* -------------- Industries We Support -------------- */}
      <div className="maxWidth py-8 md:py-20">
        <h2 className="text-3xl lg:text-5xl text-gray-700 font-semibold capitalize mb-6 sm:mb-8 dm:mb-10 xl:mb-12 text-center">Industries We Support</h2>
        <IndustriesSlider />
      </div>

      {/* -------------- 20% Offers-------------- */}
      {!isWorker && resCoupon?.data && <div className="maxWidth py-8 md:py-20">
        <OfferSection button={true} data={resCoupon?.data} />
      </div>}

      {/* -------------- Why instant labour? -------------- */}
      <div className="maxWidth py-8 md:py-20 flex flex-col items-center">
        <h2 className="text-3xl lg:text-5xl text-gray-700 font-semibold capitalize mb-6 sm:mb-8 dm:mb-10 xl:mb-12">why instant labour?</h2>
        <ul className="pl-4 text-gray-600 font-medium grid grid-cols-1 sm:grid-cols-2 gap-2">
          {whyInstantLabour?.content?.texts?.map((item: any, index: number) => (
            <li key={index} className="flex gap-4">
              <IoCheckmarkCircle className="text-3xl text-green-500" />
              <p className="md:text-xl">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* -------------- What Our Clients Say -------------- */}
      <div className="maxWidth py-8 md:py-20">
        <h2 className="text-3xl lg:text-5xl text-gray-700 font-semibold capitalize mb-6 sm:mb-8 dm:mb-10 xl:mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {resClientReview?.data?.map((item: any, index: number) => (
            <div key={index} className={`customShadow p-4 w-full max-w-100 mx-auto ${index === 1 ? "lg:mb-16" : "lg:mt-16"}`}>
              <ClientSayCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* -------------- Frequently Asked Questions -------------- */}
      <div className="maxWidth py-8 md:py-20">
        <h2 className="text-3xl lg:text-5xl text-gray-700 font-semibold capitalize mb-6 sm:mb-8 dm:mb-10 xl:mb-12 text-center">Frequently Asked Questions</h2>
        <FAQ />
      </div>

    </div>
  )
}