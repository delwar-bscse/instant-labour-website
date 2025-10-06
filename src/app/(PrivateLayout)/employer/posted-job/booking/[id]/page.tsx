import CustomButton from '@/components/cui/CustomButton';
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

      {/* ------------------- Worker Message Button ------------------- */}
      {type === 'Approved' && <div className='w-full max-w-50 mx-auto py-8'>
        <CustomButton text="Message" url="/employer/inbox" variant="button01" className='w-full' />
      </div>}
    </div>
  )
}

export default BookingWorkerDetails