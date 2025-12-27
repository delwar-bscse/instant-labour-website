/* eslint-disable react-hooks/exhaustive-deps */

"use client"

import React, { Suspense, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CustomRange from '@/components/cui/CustomRange'
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '../ui/input';
import { myFetch } from '@/utils/myFetch';

const defaultValues = {
  category: "",
  subCategory: "",
  location: "",
  price: 0,
  radius: 0
};

const SALARY_TYPE = {
  Hourly: 'Hourly',
  DAILY: 'Daily',
  // WEEKLY : 'Weekly',
  MONTHLY: 'Monthly',
  // YEARLY : 'Yearly',
}

function CustomFilterSuspense() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const [categoryDatas, setCategoryDatas] = useState<any>([]);
  const [subCategories, setSubCategories] = useState<any>([]);
  const [salaryType, setSalaryType] = useState<string>("");

  const location = searchParams.get("location") || "";
  const category = searchParams.get("category") || "";
  const subCategory = searchParams.get("subCategory") || "";
  const price = searchParams.get("price") || "0";
  const radius = searchParams.get("radius") || "0";
  const salaryTypeParam = searchParams.get("salaryType") || "";
  


  useEffect(() => {
    const fetchCategories = async () => {
      const res = await myFetch("/category", {
        method: "GET",
      });
      setCategoryDatas(res?.data);
    };
    fetchCategories();
  }, []);

  const form = useForm({
    defaultValues,
    mode: "onChange",
  });


  useEffect(() => {
    form.reset({
      location,
      category,
      subCategory,
      price: Number(price),
      radius: Number(radius)
    });
    if (category) {
      const selectedItem = categoryDatas?.find((item: any) => item.title === category);
      setSubCategories(selectedItem?.subCategories);
    }
    if(salaryTypeParam){
      setSalaryType(salaryTypeParam);
    }
  }, []);


  async function onSubmit(data: any) {
    console.log("Submitted Data:", data);
    if (data.category) {
      params.set("category", data.category);
    }
    if (data.subCategory) {
      params.set("subCategory", data.subCategory);
    }
    if (data.location) {
      params.set("location", data.location);
    }
    if (salaryType) {
      params.set("salaryType", salaryType);
    }
    if (data.price > 0) {
      params.set("price", data.price.toString());
    }
    if (data.radius > 0) {
      params.set("radius", data.radius.toString());
    }

    replace(`?${params.toString()}`);


    document.getElementById("cancel")?.click()
    form.reset();
  }


  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl">Category</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    const selectedItem = categoryDatas?.find((item: any) => item.title === value);
                    setSubCategories(selectedItem?.subCategories);
                  }}
                  defaultValue={field.value}
                >

                  <FormControl>
                    <SelectTrigger variant="borderblack" size="lg" className="w-full">
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categoryDatas?.map((item: Record<string, string>) => (
                      <SelectItem onClick={() => console.log(item)} key={item?._id} value={item?.title}>{item?.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Sub-Category */}
          <FormField
            control={form.control}
            name="subCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl">Sub Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger variant="borderblack" size="lg" className="w-full">
                      <SelectValue placeholder="Select a Sub Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {subCategories?.map((item: string, index: number) => (
                      <SelectItem key={index} value={item}>{item}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Sub Category */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Location</FormLabel>
                <FormControl>
                  <Input variant="borderblackRound" className="" placeholder="Enter location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Radius */}
          <FormField
            control={form.control}
            name="radius"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Radius</FormLabel>
                <FormControl>
                  <div>
                    <CustomRange {...field} min={0} max={100} />
                    <div className='flex justify-between text-[11px] text-gray-500'>
                      <p>1 km</p>
                      <p>100 km</p>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Price */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl flex gap-2 items-center">
                  {Object.entries(SALARY_TYPE).map(([key, value]) => (
                    <span key={key} onClick={() => setSalaryType(value)} className={`${salaryType === value ? "bg-yellow-500" : "bg-gray-200 text-gray-500"} rounded-sm text-sm py-1 px-2 `}>{value}</span>
                  ))}
                </FormLabel>
                <FormControl>
                  <div>
                    <CustomRange {...field} min={0} max={1000} />
                    <div className='flex justify-between text-[11px] text-gray-500'>
                      <p>£ 0</p>
                      <p>£ 1000</p>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button variant="yelloBtn" type="submit" size="lg" className="w-full mt-4">
            Apply
          </Button>
        </form>
      </Form>
    </div>
  )
}

export function CustomFilter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomFilterSuspense />
    </Suspense>
  );
}