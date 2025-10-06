"use client"
//use client will be remove later

import Image from "next/image"
import heroImg from "@/assets/landHero.png";
import CustomButton from "@/components/cui/CustomButton";
import { clientSay, instantLabour, howItWorksWorkers, howItWorksEmployers } from "@/data/homeData";
import { IoCheckmarkCircle } from "react-icons/io5";
import IndustriesSlider from "@/components/sections/IndustriesSlider";
import ClientSayCard from "@/components/card/ClientSayCard";
import FAQ from "@/components/sections/FAQ";
import { getUserRoleEmployer } from "@/utils/getUserRole";

export default function Home() {

  const howItWorks = getUserRoleEmployer() ? howItWorksEmployers :howItWorksWorkers;



  return (
    <div>
      {/* --------------------- Hero Section --------------------- */}
      <div className="maxWidth flex flex-col-reverse sm:flex-row items-center justify-between gap-8 py-8 md:py-20">
        <div className="flex-1 space-y-6">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl text-gray-700 font-semibold capitalize">Employment marketplace find trusted labour in minutes no phone calls  needed.</h1>
          <p className="text-gray-600 mt-4">Instantly match with local tradesmen and temp workers!</p>
          <div className="flex flex-wrap gap-4 w-full">
            <div><CustomButton text="I'm hiring" url="/workers" variant="button01" /></div>
            <div><CustomButton text="I need a job" url="/jobs" variant="button01" /></div>
            {getUserRoleEmployer() && <div>
              <CustomButton text="Instant Labour" url="/jobs" variant="button01" /></div>}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={heroImg} alt="Hero Image" width={1000} height={1000} className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-full' />
        </div>
      </div>


      {/* -------------- guaranteed a response within 7-14 days. -------------- */}
      {getUserRoleEmployer() && <div className="maxWidth">
        <div className="py-8 md:py-12 bg-brandClr2/40 rounded-md">
          <h3 className="text-xl md:text-3xl xl:text-5xl text-gray-700 font-semibold capitalize text-center">guaranteed a response within 7-14 days.</h3>
        </div>
      </div>}

      {/* --------------------- How It Works --------------------- */}
      <div className="maxWidth py-8 md:py-20">
        <h2 className="text-3xl lg:text-5xl text-gray-700 font-semibold capitalize mb-6">How it works</h2>
        <div className="flex flex-wrap gap-4 md:gap-8 xl:gap-12">
          {howItWorks?.map((item, index) => (
            <div key={index} className="flex gap-3 w-[250px]">
              <p className="text-white bg-brandClr1 w-10 h-10 flex justify-center items-center rounded-full font-semibold text-lg">{index + 1}</p>
              <div className="flex-1">
                <h3 className="font-semibold text-xl lg:text-2xl capitalize">{item.title}</h3>
                <p className="capitalize">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* -------------- 20% Offers-------------- */}
      {getUserRoleEmployer() && <div className="maxWidth py-8 md:py-20">
        <div className="bg-brandClr2 p-8 rounded-xl space-y-8">
          <h3 className="text-3xl md:text-5xl text-gray-700 font-semibold bg-white/20 inline-block px-8 py-3 rounded-sm border border-white/50">20% Offer</h3>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <p className="text-gray-700 text-xl md:text-3xl font-semibold">Today all packages 20% off</p>
            <div className="w-40">
              <CustomButton text="Buy Now" url="/credits" variant="button01" className="bg-white hover:bg-white/80" />
            </div>
          </div>
        </div>
      </div>}

      {/* -------------- Industries We Support -------------- */}
      <div className="maxWidth py-8 md:py-20">
        <h2 className="text-3xl lg:text-5xl text-gray-700 font-semibold capitalize mb-6 sm:mb-8 dm:mb-10 xl:mb-12">Industries We Support</h2>
        <IndustriesSlider />
      </div>

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