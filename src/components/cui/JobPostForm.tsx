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
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import InputList from "./InputList";
import { SALARY_TYPE } from "@/constants/salaryObject";
import { AVAILABILITY } from "@/constants/availabilityObject";
import { myFetch } from "@/utils/myFetch";

// Schema
const editProfileFormSchema = z.object({
  companyName: z.string().optional(),
  category: z.string().optional(),
  subCategory: z.string().optional(),
  location: z.string().optional(),
  salary: z.number().optional(),
  availability: z.array(z.string()).optional(),
  overview: z.string().optional(),
});

// Type
type EditProfileFormValues = z.infer<typeof editProfileFormSchema>;

const defaultValues: Partial<EditProfileFormValues> = {
  companyName: "",
  category: "",
  subCategory: "",
  location: "",
  availability: [],
  salary: 10,
  overview: "",
};

const JobPostForm = () => {

  const [keyResponsibilities, setKeyResponsibilities] = useState<string[]>([]);
  const [salaryType, setSalaryType] = useState<string>("");
  const [skillRequirements, setSkillRequirements] = useState<string[]>([]);
  const [benefits, setBenefits] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [deadline, setDeadline] = useState<number>(7);

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

    const modifiedData = {
      title: "Dummy Job",
      companyName: data.companyName,
      category: data.category,
      subCategory: data.subCategory,
      address: data.location,
      postDuration: deadline,
      overview: data.overview,
      salaryType: salaryType,
      salary: data.salary,
      availability: data.availability,
      responsibilities: keyResponsibilities,
      skillRequirements: skillRequirements,
      benifits: benefits,
    }
    console.log("Submitted Data:", modifiedData);
    const formData = new FormData();
    formData.append("data", JSON.stringify(modifiedData));

    if (image) {
      formData.append("images", image);
    }

    const response = await myFetch("/job", {
      method: "POST",
      body: formData,
    });
    console.log("Job Post Data:", response);
  }



  return (
    <div className="w-full border border-gray-200 shadow px-4 py-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          {/* Company Name */}
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl">Company Name (Optional)</FormLabel>
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
          <div className="flex gap-3">
            <span onClick={() => setDeadline(7)} className={` border-2 cursor-pointer ${deadline === 7 ? "bg-yellow-500 border-yellow-500 text-gray-700" : "bg-white border-blue-600 text-blue-600"} rounded-sm text-base py-3 px-3 font-semibold`}>7 Days Post</span>
            <span onClick={() => setDeadline(14)} className={` border-2 cursor-pointer ${deadline === 14 ? "bg-yellow-500 border-yellow-500 text-gray-700" : "bg-white border-blue-600 text-blue-600"} rounded-sm text-base py-3 px-3 font-semibold`}>14 Days Post</span>
          </div>

          {/* Deadline */}
          {/* <TakeDate date={date} setDate={setDate} /> */}


          {/* Availability */}
          <FormField
            control={form.control}
            name="availability"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl">Availability</FormLabel>
                <div className="space-y-2 flex gap-3 flex-wrap items-center border border-gray-400 py-2 px-3">
                  {Object.entries(AVAILABILITY).map(([key, value]) => (
                    <label key={key} className="flex items-center">
                      <input
                        type="checkbox"
                        value={value}
                        checked={field.value.includes(value)}
                        onChange={() => {
                          const newValue = field.value.includes(value)
                            ? field.value.filter((item) => item !== value)
                            : [...field.value, value];
                          field.onChange(newValue);
                        }}
                        className="mr-2"
                      />
                      {value}
                    </label>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />



          {/* Upload Image */}
          <div>
            <p className="text-gray-800 text-xl font-semibold pb-1">Upload 1 Image</p>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="border border-gray-400 p-2 w-full" />
          </div>

          {/* Salary */}
          <FormField
            control={form.control}
            name="salary"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl flex gap-2 items-center">
                  {Object.entries(SALARY_TYPE).map(([key, value]) => (
                    <span key={key} onClick={() => setSalaryType(value)} className={`${salaryType === value ? "bg-yellow-500" : "bg-gray-200 text-gray-500"} rounded-sm text-sm py-1 px-2 `}>{value}</span>
                  ))}
                </FormLabel>
                <FormControl>
                  <Input type="number" min={0} variant="borderblack" placeholder="Enter Your Salary" {...field} />
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
          <div className="flex justify-end">
            <Button type="submit" variant="yelloBtn" size="llg" className="text-gray-700 w-full max-w-60 md:text-lg">
              Publish
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default JobPostForm;