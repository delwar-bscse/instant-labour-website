"use client"
//use client will be remove later

import Image from "next/image"
import heroImg from "@/assets/landHero.png";
import { clientSay, instantLabour, howItWorksWorkers, howItWorksEmployers } from "@/data/homeData";
import { IoCheckmarkCircle } from "react-icons/io5";
import IndustriesSlider from "@/components/sections/IndustriesSlider";
import ClientSayCard from "@/components/card/ClientSayCard";
import FAQ from "@/components/sections/FAQ";
import { getUserRole, getUserRoleEmployer, getUserRoleWorker } from "@/utils/getUserRole";
import { BsExclamationCircle } from "react-icons/bs";
import Link from "next/link";
import { CustomModal } from "@/components/modal/CustomModal";


{/* --------------------- Components Start --------------------- */ }
const ForEmployersComponent = () => (
  <div>
    <ul className="list-disc list-outside pl-8 space-y-2 capitalize">
      <li>Post A Job In Seconds</li>
      <li>Get Instant Matches From Available Local Workers</li>
      <li>Review Profiles And Ratings</li>
    </ul>
    <p className="text-lg font-semibold pt-6 pb-2 capitalize">Need A worker Today?</p>
    <p className="capitalize">Post Your Job Now And Get Matched Within Minutes.</p>
  </div>
)

const ForWorkersComponent = () => (
  <div className="max-h-[360px] overflow-y-auto scrollbar-hide">
    <div>

      <p className="capitalize pb-2">Looking for same-day or flexible work?</p>
      <p className="capitalize">InstantLabour gives you control – choose your jobs, hours, and pay rates ?</p>

      <p className="text-lg font-semibold pt-6 pb-2 capitalize">Need A worker Today?</p>
      <ul className="list-disc list-outside pl-8 space-y-2 capitalize">
        <li>Work when it suits you</li>
        <li>Get paid quickly</li>
        <li>No phone calls or agencies</li>
      </ul>

      <p className="text-lg font-semibold pt-6 pb-2 capitalize">Popular Roles.</p>
      <ul className="list-disc list-outside pl-8 space-y-2 capitalize">
        <li>General Labourer</li>
        <li>Cleaner</li>
        <li>Driver</li>
        <li>Driver</li>
        <li>Handyman</li>
        <li>Porter</li>
        <li>Warehouse Operative</li>
        <li>Kitchen Assistant</li>
      </ul>

      <p className="text-lg font-semibold pt-6 capitalize">join free and start working today!</p>

    </div>
  </div>
)

const InstantLabourComponent = () => (
  <div className="max-h-[360px] overflow-y-auto scrollbar-hide">
    <div>
      <p className="capitalize">Hire local labourers, cleaners, drivers, and more — instantly. InstantLabour connects employers and workers in minutes using smart matching. No agencies, no phone calls, no delays — just instant results.</p>
      <p className="text-lg font-semibold pt-6 pb-2 capitalize">Need A worker Today?</p>
      <p className="pb-2 capitalize">InstantLabour is the UK’s fastest-growing on-demand work platform for urgent labour and short-term jobs.</p>
      <p className="pb-2 capitalize">We match local businesses with available workers in real time — ideal for last-minute cover, urgent projects, or one-day tasks.</p>
      <p className="pb-2 capitalize">Whether you need a labourer, cleaner, driver, handyman, warehouse staff, or kitchen assistant, InstantLabour helps you find the person instantly</p>
    </div>
  </div>
)
{/** --------------------- Components End --------------------- */ }

export default function Home() {

  const howItWorks = getUserRoleEmployer() ? howItWorksEmployers : howItWorksWorkers;



  return (
    <div>
      {/* --------------------- Hero Section --------------------- */}
      <div className="maxWidth flex flex-col-reverse sm:flex-row items-center justify-between gap-8 py-8 md:py-20">
        <div className="flex-1 space-y-6">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl text-gray-800 font-semibold capitalize">Employment marketplace find trusted labour in minutes no phone calls  needed.</h1>
          <p className="text-gray-700 mt-4 font-semibold">Instantly match with local tradesmen and temp workers!</p>

          {/* ---------------------Only Button & Button Modal --------------------- */}
          {getUserRole() ? <div className="flex flex-wrap gap-4 w-full">

            {getUserRoleEmployer() && <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/workers" className="font-semibold text-gray-800">Im Hiring</Link>
            </div>}

            {getUserRoleWorker() && <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/workers" className="font-semibold text-gray-800">I Need A Job</Link>
            </div>}

            {getUserRoleEmployer() && <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/workers" className="font-semibold text-gray-800">Instant Labour</Link>
            </div>}

          </div> : <div className="flex flex-wrap gap-4 w-full">

            <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/workers" className="font-semibold text-gray-800">Im Hiring</Link>
              {!getUserRole() && <CustomModal
                title="For Employers"
                trigger={<BsExclamationCircle />}
              >
                <ForEmployersComponent />
              </CustomModal>}
            </div>

            <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/workers" className="font-semibold text-gray-800">I Need A Job</Link>
              {!getUserRole() && <CustomModal
                title="For Workers"
                trigger={<BsExclamationCircle />}
              >
                <ForWorkersComponent />
              </CustomModal>}
            </div>

            <div className="flex items-center justify-center gap-2 bg-brandClr2 hover:bg-brandClr2/90 transition-colors duration-200 cursor-pointer rounded-sm px-4 py-1.5">
              <Link href="/workers" className="font-semibold text-gray-800">Instant Labour</Link>
              {!getUserRole() && <CustomModal
                title="InstantLabour - Find Worker Or Work Instantly Near You"
                trigger={<BsExclamationCircle />}
              >
                <InstantLabourComponent />
              </CustomModal>}
            </div>

          </div>
          }

        </div>
        <div className="flex justify-center items-center">
          <Image src={heroImg} alt="Hero Image" width={1000} height={1000} className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-full' />
        </div>
      </div>


      {/* -------------- guaranteed a response within 7-14 days. -------------- */}
      {!getUserRoleEmployer() && <div className="maxWidth">
        <div className="py-8 md:py-12 bg-brandClr2/40 rounded-md px-4">
          <h3 className="text-2xl md:text-3xl xl:text-5xl text-gray-700 font-semibold capitalize text-center">guaranteed a response within 7-14 days.</h3>
        </div>
      </div>}

      {/* --------------------- How It Works --------------------- */}
      {getUserRole() && <div className="maxWidth py-8 md:py-20">
        <h2 className="text-3xl lg:text-5xl text-gray-700 font-semibold capitalize mb-6">How it works</h2>
        <div className="flex flex-wrap gap-4 md:gap-8 xl:gap-12">
          {howItWorks?.map((item, index) => (
            <div key={index} className="flex gap-3 w-[250px]">
              <p className="text-white bg-brandClr1 w-10 h-10 flex justify-center items-center rounded-full font-semibold text-lg">{index + 1}</p>
              <div className="flex-1">
                <h3 className="font-semibold text-xl lg:text-2xl capitalize">{item.title}</h3>
                <p className="capitalize text-gray-500 ">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>}


      {/* -------------- Industries We Support -------------- */}
      <div className="maxWidth py-8 md:py-20">
        <h2 className="text-3xl lg:text-5xl text-gray-700 font-semibold capitalize mb-6 sm:mb-8 dm:mb-10 xl:mb-12">Industries We Support</h2>
        <IndustriesSlider />
      </div>

      {/* -------------- 20% Offers-------------- */}
      {!getUserRoleWorker() && <div className="maxWidth py-8 md:py-20">
        <div className="bg-brandClr2 p-8 rounded-xl space-y-8">
          <h3 className="text-xl md:text-3xl font-semibold  inline-block px-8 py-3 rounded-sm bg-blue-600 text-white">20% Offer</h3>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <p className="text-gray-700 text-xl md:text-3xl font-semibold">Today all packages 20% off</p>
            <div className="w-32">
              <Link href="/subscription" className="px-4 py-2.5 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-600 text-lg font-semibold rounded-sm transition-colors duration-200">Buy Now</Link>
            </div>
          </div>
        </div>
      </div>}

      {/* -------------- Why instant labour? -------------- */}
      <div className="maxWidth py-8 md:py-20">
        <h2 className="text-3xl lg:text-5xl text-gray-700 font-semibold capitalize mb-6 sm:mb-8 dm:mb-10 xl:mb-12">why instant labour?</h2>
        <ul className="pl-4 text-gray-600 font-medium grid grid-cols-1 sm:grid-cols-2 gap-2">
          {instantLabour?.map((item, index) => (
            <li key={index} className="flex gap-4">
              <IoCheckmarkCircle className="text-3xl text-green-500" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* -------------- What Our Clients Say -------------- */}
      <div className="maxWidth py-8 md:py-20">
        <h2 className="text-3xl lg:text-5xl text-gray-700 font-semibold capitalize mb-6 sm:mb-8 dm:mb-10 xl:mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {clientSay?.map((item, index) => (
            <div key={index} className={`customShadow p-4 max-w-[400px] mx-auto ${index === 1 ? "lg:mb-16" : "lg:mt-16"}`}>
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