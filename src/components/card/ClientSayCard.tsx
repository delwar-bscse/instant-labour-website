/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Image from 'next/image'
import Rating from '../cui/Rating';

const ClientSayCard = ({item}:{item:Record<string, any>}) => {

  return (
    <div>
      <div>
        <Image src={item.img} alt="Client" width={100} height={20} className='w-full h-[260px] object-fit' />
      </div>
      <div className="space-y-2 py-8">
        <p className="font-semibold text-2xl text-gray-800">{item.name}</p>
        <p className="font-semibold text-xl text-gray-500">{item.designation}</p>
        <p className="font-semibold text-sm text-gray-500">{item.des}</p>
        <div>
          <Rating value={item.rating}/>
        </div>
      </div>
    </div>
  )
}

export default ClientSayCard