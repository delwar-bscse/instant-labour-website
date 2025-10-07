/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

"use client";
// import Message from '@/components/sections/Message';
import { Input } from '@/components/ui/input'
import { msgDetails, msgList } from '@/data/msgData'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { TbMessage2 } from "react-icons/tb";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { brandLogo } from '@/assets/assets';
import { IoClose } from 'react-icons/io5';


const Inbox = () => {

  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className='maxWidth lg:flex gap-2'>
      {/* ------------------- Left Side ------------------- */}
      <div className='hidden lg:block lg:basis-[30%] space-y-2'>
        {/* -- Search bar -- */}
        <div className="w-full">
          <Input
            className="w-full rounded-full bg-background pl-6 h-11 focus-visible:ring focus-visible:ring-gray-300 focus-visible:border-gray-300 outline-none sm:text-xl text-gray-500 font-normal"
            placeholder="Search..."
          />
        </div>
        {/* -- Inbox List -- */}
        <div className='overflow-y-scroll scrollbar-hide' style={{ height: "calc(100vh - 170px)" }}>
          <div className='my-4 space-y-4'>
            {msgList.map((item) => (
              <div key={item.id} className='flex items-center gap-4 p-3 border shadow-md rounded-md'>
                <div>
                  <Image src={item.img} alt={item.name} width={100} height={100} className='w-[50px] h-[50px] object-fit rounded-full' />
                </div>
                <div className='flex-1'>
                  <p className='flex flex-wrap justify-between gap-2'>
                    <span className='font-semibold text-gray-800'>{item.name}</span>
                    <span className=' text-gray-500 text-[11px]'>{item.time}</span>
                  </p>
                  <p>{item.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------- Right Side ------------------- */}
      <div className='flex-1 border'>
        {/* <Message msgDetails={msgDetails} /> */}
        <div>
          <div key={msgDetails.id} className='flex items-center gap-4 p-3 border-b'>
            <div>
              <Image src={msgDetails.img} alt={msgDetails.name} width={100} height={100} className='w-[50px] h-[50px] object-fit rounded-full' />
            </div>
            <div className='flex-1'>
              <p className='flex flex-col '>
                <span className='font-semibold text-gray-800 text-lg'>{msgDetails.name}</span>
                <span className='text-gray-500 text-[11px]'>Kamran is typing...</span>
              </p>
            </div>
            {/* ------------------- Message Menu ------------------- */}
            <div className='lg:hidden'>
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild className='cursor-pointer'>
                  <TbMessage2 className='size-9 text-gray-600 hover:text-gray-700' />
                </SheetTrigger>
                <SheetContent side="left" className="w-64">
                  <SheetHeader className='flex flex-row items-center justify-between pt-8'>
                    <SheetTitle className="">
                      <Image src={brandLogo} alt="Brand Logo" width={100} height={20} className='w-30 h-6 object-fit' />
                    </SheetTitle>
                    <SheetClose>
                      <IoClose size={24} className='text-gray-600 hover:text-gray-800 cursor-pointer' />
                    </SheetClose>
                  </SheetHeader>
                  <div className='space-y-2 px-2'>
                    {/* -- Search bar -- */}
                    <div className="w-full">
                      <Input
                        className="w-full rounded-full bg-background pl-6 h-11 focus-visible:ring focus-visible:ring-gray-300 focus-visible:border-gray-300 outline-none sm:text-xl text-gray-500 font-normal"
                        placeholder="Search..."
                      />
                    </div>
                    {/* -- Inbox List -- */}
                    <div className='overflow-y-scroll scrollbar-hide' style={{ height: "calc(100vh - 170px)" }}>
                      <div className='my-4 space-y-4'>
                        {msgList.map((item) => (
                          <div key={item.id} className='flex items-center gap-4 p-3 border shadow-md rounded-md'>
                            <div>
                              <Image src={item.img} alt={item.name} width={100} height={100} className='w-[50px] h-[50px] object-fit rounded-full' />
                            </div>
                            <div className='flex-1'>
                              <p className='flex flex-wrap justify-between gap-2'>
                                <span className='font-semibold text-gray-800'>{item.name}</span>
                                <span className=' text-gray-500 text-[11px]'>{item.time}</span>
                              </p>
                              <p>{item.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        {/* ------------------- Messages ------------------- */}
        <div className='overflow-y-scroll scrollbar-hide' style={{ height: "calc(100vh - 260px)" }}>
          <div className='flex flex-col-reverse justify-end gap-4 p-4'>
            {msgDetails.message.map((item: any) => (
              <div key={item.id} className={`flex flex-col ${item.role === 'worker' ? "flex-row-reverse" : "flex-row"} flex gap-4 group`}>
                <div key={item.id} className={`${item.role === 'worker' ? "bg-[#6D6DFF]" : "bg-[#E6E6E6]"} p-4 rounded-2xl w-[500px]`}>
                  <p className={`${item.role === 'worker' ? "text-white" : "text-gray-800"}`}>{item.msg}</p>
                  <span className={`${item.role === 'worker' ? "text-white" : "text-gray-800"} text-[11px]`}>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ------------------- Write & Send Message ------------------- */}
        <div className="flex items-center gap-4 p-4">
          <Input type="text" variant="msgField" placeholder="type..." className="flex-1 transition-all duration-300 bg-white h-11 rounded-full outline-none focus-visible:ring focus-visible:ring-gray-300 focus-visible:border-gray-300" />
          <span className={`text-2xl cursor-pointer bg-white p-2.5 rounded-full shadow-md hover:scale-105 transition-all duration-300 border`}>
            <IoIosSend className="text-gray-600 hover:text-gray-400 transition-all duration-300 text-2xl" />
          </span>
        </div>
      </div>

    </div>
  )
}

export default Inbox