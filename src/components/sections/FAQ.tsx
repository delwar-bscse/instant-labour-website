/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { myFetch } from '@/utils/myFetch'


const FAQ = () => {
  const [faqDatas, setCategoryDatas] = React.useState<any>([]);
    
  useEffect(() => {
      const fetchCategories = async () => {
        const res = await myFetch("/public/faq/all", {
          method: "GET",
        });
        setCategoryDatas(res?.data);
      };
      fetchCategories();
    }, []);

  return (
    <div className='max-w-[960px] w-full mx-auto px-2'>
      {/* <Title title="Frequently Asked Questions" /> */}
      <div>
        <Accordion type="single" collapsible>
          {faqDatas?.map((faq: Record<string, any>) => (
            <AccordionItem key={faq._id} value={faq._id.toString()} className='bg-[#E6EEFC]'>
              <AccordionTrigger>{faq?.question}</AccordionTrigger>
              <AccordionContent>{faq?.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default FAQ


