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
import { useSearchParams } from 'next/navigation';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const defaultValues = {
  post: "",
  des: "",
};

function WorkExperienceModalSuspense({setWorkExperienceInput}:{setWorkExperienceInput: React.Dispatch<React.SetStateAction<Record<string, string>>>}) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const form = useForm({
    defaultValues,
    mode: "onChange",
  });


  async function onSubmit(data: any) {
    console.log("Submitted Data:", data);
    if (data.category) {
      params.set("post", data.post);
    }
    if (data.subCategory) {
      params.set("des", data.des);
    }

    setWorkExperienceInput({
      post: data.post,
      des: data.des
    });


    document.getElementById("cancel")?.click()
    form.reset();
  }


  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          {/* Name */}
          <FormField
            control={form.control}
            name="post"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600 text-lg">Job Title</FormLabel>
                <FormControl>
                  <Input variant="borderblack" placeholder="Enter job title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* About Me */}
          <FormField
            control={form.control}
            name="des"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea variant="borderblack" placeholder="Enter description" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button variant="yelloBtn" type="submit" size="lg" className="w-full mt-4">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}

export function WorkExperienceModal({setWorkExperienceInput}:{setWorkExperienceInput: React.Dispatch<React.SetStateAction<Record<string, string>>>}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkExperienceModalSuspense  setWorkExperienceInput={setWorkExperienceInput}/>
    </Suspense>
  );
}