import CustomButton from '@/components/cui/CustomButton';
import WorkerDetailsBody from '@/components/cui/WorkerDetailsBody'
import WorkerDetailsTop from '@/components/cui/WorkerDetailsTop'
import React from 'react'

interface Props {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const ApproveAppliedWorkerDetails = ({ searchParams }: Props) => {
  const type = searchParams.type;
  return (
    <div className='pb-12'>
      {/* ------------------- Worker Details Top ------------------- */}
      <WorkerDetailsTop />

      {/* ------------------- Worker Message Button ------------------- */}
      {/* <div className='maxWidth pb-4'>
        {type === 'approved' && <div className='w-full max-w-50'>
          <CustomButton text="Message" url="/employer/inbox" variant="button01" className='w-full' />
        </div>}
      </div> */}

      {/* ------------------- Worker Details Body ------------------- */}
      <WorkerDetailsBody />

      {/* ------------------- Action Buttons - Decline, Approve ------------------- */}
      {type === 'applied' && <div className='max-w-[200px] mx-auto my-12 flex justify-center gap-4 items-center'>
        <button className='w-full bg-red-500 text-white py-2 px-3 rounded-sm hover:bg-red-600 transition-colors duration-300'>Decline</button>
        <button className='w-full bg-green-500 text-white py-2 px-3 rounded-sm hover:bg-green-600 transition-colors duration-300'>Approve</button>
      </div>}

      {/* ------------------- Worker Message Button ------------------- */}
      {type === 'approved' && <div className='w-full max-w-50 mx-auto py-8'>
        <CustomButton text="Message" url="/employer/inbox" variant="button01" className='w-full' />
      </div>}
    </div>
  )
}

export default ApproveAppliedWorkerDetails