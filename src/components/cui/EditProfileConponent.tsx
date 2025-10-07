/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { myFetch } from "@/utils/myFetch";
import { Textarea } from "../ui/textarea";
import { WorkExperienceModal } from "./WorkExperienceModal";
import { CustomModal } from "../modal/CustomModal";
import InputList from "./InputList";

// Schema
const editProfileFormSchema = z.object({
  name: z.string(),
  category: z.string(),
  subCategory: z.string(),

  aboutMe: z.string(),
  payRequired: z.string(),
  availability: z.string(),
});

// Type
type EditProfileFormValues = z.infer<typeof editProfileFormSchema>;

const defaultValues: Partial<EditProfileFormValues> = {
  name: "",
  category: "",
  subCategory: "",
  aboutMe: "",
  payRequired: "",
  availability: "",
};

const EditProfileComponent = () => {
  // const [payRequired, setPayRequired] = useState<string>();
  const [coreSkills, setCoreSkills] = useState<string[]>([]);
  const [budgetDuration, setBudgetDuration] = useState<string>("perHour");
  const [workExperience, setWorkExperience] = useState<Record<string, string>[]>([]);
  const [workExperienceInput, setWorkExperienceInput] = useState<Record<string, string>>({
    post: "",
    des: ""
  });

  const form = useForm<EditProfileFormValues>({
    resolver: zodResolver(editProfileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: EditProfileFormValues) {
    console.log("Submitted Data:", data);
    // const formData = new FormData();
    // formData.append("name", data.name);
    // // formData.append("email", data.email);
    // formData.append("phone", data.phoneNumber);

    // const response = await myFetch("/users/update-my-profile", {
    //   method: "PATCH",
    //   body: formData,
    // });
    // // console.log("User Data:", response);
  }

  useEffect(() => {
    async function getUserData() {
      const response = await myFetch("/users/my-profile", {
        method: "GET",
      });
      // console.log("User Data:", response);
      form.reset({
        name: response?.data?.name || "",
      }); // Reset form with user data
    }
    getUserData();
  }, []);

  useEffect(() => {
    console.log("workExperienceInput : ", workExperienceInput)
    if (workExperienceInput?.post !== "" && workExperienceInput?.des !== "") {
      setWorkExperience([...workExperience, workExperienceInput]);
    }
  }, [workExperienceInput]);


  return (
    <div className="w-full border border-gray-200 shadow px-4 py-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl">Name</FormLabel>
                <FormControl>
                  <Input variant="borderblack" placeholder="Enter full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl">Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger variant="borderblack" size="lg" className="w-full">
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Category 01">Category 01</SelectItem>
                    <SelectItem value="Category 02">Category 02</SelectItem>
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
                    <SelectItem value="Sub Category 01">Sub Category 01</SelectItem>
                    <SelectItem value="Sub Category 02">Sub Category 02</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Availability */}
          <FormField
            control={form.control}
            name="availability"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl">Availability</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger variant="borderblack" size="lg" className="w-full">
                      <SelectValue placeholder="Select a availability" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Full-Time">Full-Time</SelectItem>
                    <SelectItem value="Part-Time">Part-Time</SelectItem>
                    <SelectItem value="Flexible">Flexible</SelectItem>
                    <SelectItem value="One Day">One Day</SelectItem>
                    <SelectItem value="Weekly">Weekly</SelectItem>
                    <SelectItem value="Monthly">Monthly</SelectItem>
                    <SelectItem value="Yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Pay Required */}
          <FormField
            control={form.control}
            name="payRequired"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl flex gap-2 items-center">
                  <span>Pay Required</span>
                  <span onClick={() => setBudgetDuration("perHour")} className={`${budgetDuration === "perHour" ? "bg-yellow-500" : "bg-gray-500"} rounded-sm text-base py-1 px-2 text-white`}>Per Hour</span>
                  <span onClick={() => setBudgetDuration("perDay")} className={`${budgetDuration === "perDay" ? "bg-yellow-500" : "bg-gray-500"} rounded-sm text-base py-1 px-2 text-white`}>Per Day</span>
                </FormLabel>
                <FormControl>
                  <Input variant="borderblack" placeholder="Enter full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* About Me */}
          <FormField
            control={form.control}
            name="aboutMe"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl">About Me</FormLabel>
                <FormControl>
                  <Textarea variant="borderblack" placeholder="Enter about yourself" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ------------------ Core Skills ------------------ */}
          <InputList title="Core Skills" list={coreSkills} setList={setCoreSkills} />


          {/* ------------------ Work Experience ------------------ */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-800 text-lg pb-1.5 font-semibold">Work Experience</p>
              <CustomModal
                title="Jobs Filter Options"
                trigger={<button className='border border-gray-400 px-4 py-1 text-gray-700 cursor-pointer'>
                  Add+
                </button>}
              >
                <WorkExperienceModal setWorkExperienceInput={setWorkExperienceInput} />
              </CustomModal>
            </div>
            <ul className='w-full space-y-4 list-disc'>
              {workExperience?.length > 0 && workExperience?.map((item, index) => (
                <li key={index} className='flex flex-col items-start gap-1'>
                  <span className='flex items-center justify-between w-full'>
                    <span className='text-gray-700 font-semibold'>{index + 1}. {item?.post}</span>
                    <span
                      className="text-red-500 cursor-pointer"
                      onClick={() => {
                        const updatedOffers = workExperience.filter((_, idx) => index !== idx);
                        setWorkExperience(updatedOffers);
                      }}
                    >
                      Delete
                    </span>
                  </span>
                  <span className='text-gray-600 text-sm ps-4'>{item?.des}</span>
                </li>
              ))}
            </ul>
          </div>


          {/* Submit */}
          <Button type="submit" variant="yelloBtn" size="llg" className="w-full">
            Save
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default EditProfileComponent;