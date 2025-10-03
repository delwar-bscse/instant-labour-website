
import React from 'react'
import WorkerDetailsTop from '@/components/cui/WorkerDetailsTop';
import WorkerDetailsBody from '@/components/cui/WorkerDetailsBody';

const SingleWorker = () => {
  return (
    <div className='maxWidth pt-4 pb-20'>

      {/* ------------------- Worker Details Body ------------------- */}
      <WorkerDetailsTop />

      {/* ------------------- Worker Details Body ------------------- */}
      <WorkerDetailsBody />

    </div>
  )
}

export default SingleWorker