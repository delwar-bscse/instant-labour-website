import WorkerDetailsBody from '@/components/cui/WorkerDetailsBody'
import WorkerDetailsTop from '@/components/cui/WorkerDetailsTop'
import React from 'react'

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const BookingWorkerDetails = ({ searchParams }: Props) => {
  const type = searchParams.type;
  console.log("Status",type)
  return (
    <div className='maxWidth pt-4 pb-20'>
      {/* ------------------- Worker Details Body ------------------- */}
      <WorkerDetailsTop />

      {/* ------------------- Worker Details Body ------------------- */}
      <WorkerDetailsBody />
    </div>
  )
}

export default BookingWorkerDetails