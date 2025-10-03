/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from 'react'
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
import PriceRange from '@/components/cui/CustomRange'
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '../ui/input';

const defaultValues = {
  category: "",
  subCategory: "",
  location: "",
  price: 50,
  radius: 50
};

function CustomFilterSuspense() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const form = useForm({
    defaultValues,
    mode: "onChange",
  });


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
    if (data.price) {
      params.set("price", data.price.toString());
    }
    if (data.radius) {
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
                <FormLabel className="text-gray-600">Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger variant="yelloBg" size="lg" className="w-full">
                      <SelectValue placeholder="Select a Role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Category01">Category 1</SelectItem>
                    <SelectItem value="Category02">Category 2</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Sub Category */}
          <FormField
            control={form.control}
            name="subCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Sub Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger variant="yelloBg" size="lg" className="w-full">
                      <SelectValue placeholder="Select a Role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="SubCategory01">Sub Category 1</SelectItem>
                    <SelectItem value="SubCategory02">Sub Category 2</SelectItem>
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
                  <Input variant="borderblackRound" className="" placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Price */}
          <FormField
            control={form.control}
            name="radius"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Radius</FormLabel>
                <FormControl>
                  <div>
                    <PriceRange {...field} />
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
                <FormLabel className="text-gray-600">Price</FormLabel>
                <FormControl>
                  <div>
                    <PriceRange {...field} />
                    <div className='flex justify-between text-[11px] text-gray-500'>
                      <p>£ 0</p>
                      <p>£ 100</p>
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