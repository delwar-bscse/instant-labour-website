/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqDatas } from '@/data/homeData'
// import { faqDatas } from '@/constants/faqDatas'
// import { faqType } from '@/types/types'
// import Title from './Title'


const FAQ = () => {
  return (
    <div className='max-w-[960px] w-full mx-auto px-2'>
      {/* <Title title="Frequently Asked Questions" /> */}
      <div>
        <Accordion type="single" collapsible>
          {faqDatas?.map((faq: Record<string, any>) => (
            <AccordionItem key={faq.id} value={faq.id.toString()} className='bg-[#E6EEFC]'>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default FAQ


