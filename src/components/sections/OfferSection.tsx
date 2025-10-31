"use client"

import Link from 'next/link'
import React from 'react'

const OfferSection = ({button}: {button?: boolean}) => {
  return (
    <>
      <div className="bg-brandClr2 p-8 rounded-xl space-y-8">
        <h3 className="text-xl md:text-3xl font-semibold  inline-block px-8 py-3 rounded-sm bg-blue-600 text-white">20% Offer</h3>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-gray-700 text-xl md:text-3xl font-semibold">All packages 20% offer</p>
          {button && <div className="w-32">
            <Link href="/subscription" className="px-4 py-2.5 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-600 text-lg font-semibold rounded-sm transition-colors duration-200">Buy Now</Link>
          </div>}
        </div>
      </div>
    </>
  )
}

export default OfferSection