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
import { Textarea } from "../ui/textarea";
import InputList from "./InputList";
import { TakeDate } from "./TakeDate";

// Schema
const editProfileFormSchema = z.object({
  companyName: z.string(),
  category: z.string(),
  subCategory: z.string(),
  location: z.string(),
  // deadline: z.string(),
  availability: z.string(),
  budget: z.string(),
  overview: z.string(),
});

// Type
type EditProfileFormValues = z.infer<typeof editProfileFormSchema>;

const defaultValues: Partial<EditProfileFormValues> = {
  companyName: "",
  category: "",
  subCategory: "",
  location: "",
  // deadline: "",
  availability: "",
  budget: "",
  overview: "",
};

const JobPostEditForm = () => {

  const [keyResponsibilities, setKeyResponsibilities] = useState<string[]>([]);
  const [skillRequirements, setSkillRequirements] = useState<string[]>([]);
  const [benefits, setBenefits] = useState<string[]>([]);
  const [date, setDate] = useState<Date>(new Date());
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const form = useForm<EditProfileFormValues>({
    resolver: zodResolver(editProfileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: EditProfileFormValues) {
    console.log("Submitted Data:", data);
    const formData = new FormData();
    formData.append("companyName", data.companyName);
    formData.append("category", data.category);
    formData.append("subCategory", data.subCategory);
    formData.append("email", data.location);
    formData.append("deadline", date.toISOString());
    formData.append("phone", data.availability);
    if (image) {
      formData.append("image", image);
    }
    formData.append("budget", data.budget);
    formData.append("keyResponsibilities", JSON.stringify(keyResponsibilities));
    formData.append("skillRequirements", JSON.stringify(skillRequirements));
    formData.append("benefits", JSON.stringify(benefits));

    // const response = await myFetch("/users/update-my-profile", {
    //   method: "PATCH",
    //   body: formData,
    // });
    // console.log("User Data:", response);
  }

  useEffect(() => {
    console.log("Key Responsibilities:", keyResponsibilities);
    console.log("Skill Requirements:", skillRequirements);
    console.log("Benefits:", benefits);
    console.log("Date:", date);
  }, [keyResponsibilities, skillRequirements, benefits, date]);



  return (
    <div className="w-full max-w-[700px] mx-auto py-16">
      <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold text-gray-600 pb-8 text-center">Edit Job</h2>
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            {/* Company Name */}
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 text-xl">Company Name</FormLabel>
                  <FormControl>
                    <Input variant="borderblack" placeholder="Enter company name" {...field} />
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

            {/* Location */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 text-xl">Location</FormLabel>
                  <FormControl>
                    <Input variant="borderblack" placeholder="Enter Job Location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Deadline */}
            <TakeDate date={date} setDate={setDate} />


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

            {/* Upload Image */}
            <div>
              <p className="text-gray-800 text-xl font-semibold pb-1">Upload 1 Image</p>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="border border-gray-400 p-2 w-full" />
            </div>
            
              {/* Budget */}
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-800 text-xl">Budget</FormLabel>
                    <FormControl>
                      <Input type="number" min={0} variant="borderblack" placeholder="Enter job budget" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            {/* Job Overview */}
            <FormField
              control={form.control}
              name="overview"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 text-xl">Job Overview</FormLabel>
                  <FormControl>
                    <Textarea variant="borderblack" placeholder="Enter your message" {...field} className="" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <InputList title="Key Responsibilities" list={keyResponsibilities} setList={setKeyResponsibilities} />
            <InputList title="Skill Requirements" list={skillRequirements} setList={setSkillRequirements} />
            <InputList title="Benefits" list={benefits} setList={setBenefits} />

            {/* Submit */}
            <Button type="submit" variant="yelloBtn" size="llg" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default JobPostEditForm;