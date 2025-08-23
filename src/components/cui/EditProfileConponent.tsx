/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { CircleCheck, CircleMinus, Plus } from "lucide-react";
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

// Schema
const editProfileFormSchema = z.object({
  name: z.string(),
  category: z.string(),
  subCategory: z.string(),
  aboutMe: z.string(),
});

// Type
type EditProfileFormValues = z.infer<typeof editProfileFormSchema>;

const defaultValues: Partial<EditProfileFormValues> = {
  name: "",
  category: "",
  subCategory: "",
  aboutMe: "",
};

const EditProfileComponent = () => {

  const [coreSkills, setCoreSkills] = useState<string[]>([]);
  const [coreSkillsInput, setCoreSkillsInput] = useState<string>('');
  const [workExperience, setWorkExperience] = useState<Record<string, string>[]>([]);
  const [workExperienceInput, setWorkExperienceInput] = useState<Record<string, string>>({});

  const form = useForm<EditProfileFormValues>({
    resolver: zodResolver(editProfileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: EditProfileFormValues) {
    // toast.success("Message send successfully!");
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
    // if (response?.success) {
    //   // toast.success("Profile updated successfully!");
    //   toast.success(response?.message || "Profile updated successfully!");
    // } else {
    //   // toast.error("Failed to update profile. Please try again.");
    //   toast.error(response?.error || "Error updating profile");
    // }
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
    if(workExperienceInput.post !== "" && workExperienceInput.des !== ""){
      setWorkExperience([...workExperience, workExperienceInput]);
    }
  }, [workExperienceInput]);


  return (
    <div className="w-full max-w-[700px] mx-auto flex text-center justify-center">
      <div className="bg-white shadow px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600 text-lg">Name</FormLabel>
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
                  <FormLabel className="text-gray-600">Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger variant="yelloBg" size="lg" className="w-full">
                        <SelectValue placeholder="Select a Role" />
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
                  <FormLabel className="text-gray-600">Sub Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger variant="yelloBg" size="lg" className="w-full">
                        <SelectValue placeholder="Select a Role" />
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

            {/* About Me */}
            <FormField
              control={form.control}
              name="aboutMe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About Me</FormLabel>
                  <FormControl>
                    <Textarea variant="borderblack" placeholder="Enter your message" {...field} className="" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ------------------ Core Skills ------------------ */}
            <>
              <div>
                <Label htmlFor="terms" className="text-gray-600 text-lg pb-1.5">Core Skills</Label>
                <div className="flex items-center gap-2">
                  <Input id="terms" variant="borderblack" placeholder="" value={coreSkillsInput} onChange={e => setCoreSkillsInput(e.target.value)} />
                  <span
                    className="border-2 border-gray-400 cursor-pointer p-2.5 rounded-md"
                    onClick={() => {
                      if (coreSkillsInput.trim()) {
                        // console.log(coreSkillsInput);
                        setCoreSkills([...coreSkills as string[], coreSkillsInput.trim()]);
                        setCoreSkillsInput('');
                      }
                    }}
                  >
                    <Plus />
                  </span>
                </div>
              </div>

              {/* Core Skills Output*/}
              {coreSkills.length > 0 && <ul className="grid gap-2 p-4 border rounded-lg mb-4">
                {coreSkills?.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between gap-4 py-2 border-b border-b-gray-100">
                    <p className="flex items-center gap-2">
                      <CircleCheck className="size-5 min-w-5 text-green-500" />
                      {item}
                    </p>
                    <span
                      onClick={() => {
                        const updatedOffers = coreSkills.filter((_, index) => index !== idx);
                        setCoreSkills(updatedOffers);
                      }}
                      className="cursor-pointer"
                    >
                      <CircleMinus className="text-stone-500" />
                    </span>
                  </li>
                ))}
              </ul>}
            </>

            {/* ------------------ Work Experience ------------------ */}
            <div>
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-lg pb-1.5">Work Experience</p>
                <CustomModal
                  title="Jobs Filter Options"
                  trigger={<button className='border border-gray-400 px-4 py-1 text-gray-500 rounded-sm cursor-pointer'>
                    Add+
                  </button>}
                >
                  <WorkExperienceModal setWorkExperienceInput={setWorkExperienceInput} />
                </CustomModal>
              </div>
              <ul className='w-full space-y-4 list-disc'>
                {workExperience.length > 0 && workExperience?.map((item, index) => (
                  <li key={index} className='flex flex-col items-start gap-1'>
                    <span className='text-gray-700 font-semibold'>{index + 1}. {item?.post}</span>
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
    </div>
  )
}

export default EditProfileComponent;