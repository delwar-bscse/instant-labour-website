import Message from '@/components/sections/Message';
import { Input } from '@/components/ui/input'
import { msgDetails, msgList } from '@/data/msgData'
import Image from 'next/image'
import React from 'react'

const Inbox = () => {
  return (
    <div className='maxWidth flex gap-2'>
      {/* ------------------- Left Side ------------------- */}
      <div className='sm:basis-[50%] md:basis-[40%] lg:basis-[30%] space-y-2'>
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
                    <span className='text-gray-500 text-[11px]'>{item.time}</span>
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
        <Message msgDetails={msgDetails} />
      </div>
    </div>
  )
}

export default Inbox