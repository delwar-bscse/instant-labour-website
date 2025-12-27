"use client"
import Image from 'next/image'
import Rating from '../cui/Rating';
import { formatUrl } from '@/utils/formatUrl';

const ClientSayCard = ({ item }: { item: Record<string, any> }) => {
  // console.log("client say : ", item)

  return (
    <div>
      <div>
        <Image src={formatUrl(item?.image)} alt="Client" width={1000} height={700} className='w-full h-65 object-fit' />
      </div>
      <div className="space-y-2 py-8">
        <p className="font-semibold text-2xl text-gray-800">{item?.name}</p>
        <p className="font-semibold text-xl text-gray-500">{item?.designation}</p>
        <p className="font-semibold text-sm text-gray-500">{item?.description}</p>
        <div>
          <Rating value={item?.rating} />
        </div>
      </div>
    </div>
  )
}

export default ClientSayCard