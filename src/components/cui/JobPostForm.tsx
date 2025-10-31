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

// Schema
const editProfileFormSchema = z.object({
  companyName: z.string(),
  category: z.string(),
  subCategory: z.string(),
  location: z.string(),
  // deadline: z.string(),
  availability: z.array(z.string()),
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
  availability: [],
  budget: "",
  overview: "",
};

const JobPostForm = () => {

  const [keyResponsibilities, setKeyResponsibilities] = useState<string[]>([]);
  const [budgetDuration, setBudgetDuration] = useState<string>("perHour");
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
    console.log("Submitted Data:", data);
    const formData = new FormData();
    formData.append("companyName", data.companyName);
    formData.append("category", data.category);
    formData.append("subCategory", data.subCategory);
    formData.append("email", data.location);
    formData.append("deadline", deadline.toString());
    formData.append("phone", data.availability.join(","));
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
    console.log("Deadline:", deadline);
    console.log("jobType", budgetDuration)
  }, [keyResponsibilities, skillRequirements, benefits, deadline, budgetDuration]);



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
          {/* <FormField
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
          /> */}
          <FormField
            control={form.control}
            name="availability"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl">Availability</FormLabel>
                <div className="space-y-2 flex gap-3 flex-wrap items-center border border-gray-400 py-2 px-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Full-Time"
                      checked={field.value.includes("Full-Time")}
                      onChange={() => {
                        const newValue = field.value.includes("Full-Time")
                          ? field.value.filter((item) => item !== "Full-Time")
                          : [...field.value, "Full-Time"];
                        field.onChange(newValue);
                      }}
                      className="mr-2"
                    />
                    Full-Time
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Part-Time"
                      checked={field.value.includes("Part-Time")}
                      onChange={() => {
                        const newValue = field.value.includes("Part-Time")
                          ? field.value.filter((item) => item !== "Part-Time")
                          : [...field.value, "Part-Time"];
                        field.onChange(newValue);
                      }}
                      className="mr-2"
                    />
                    Part-Time
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Flexible"
                      checked={field.value.includes("Flexible")}
                      onChange={() => {
                        const newValue = field.value.includes("Flexible")
                          ? field.value.filter((item) => item !== "Flexible")
                          : [...field.value, "Flexible"];
                        field.onChange(newValue);
                      }}
                      className="mr-2"
                    />
                    Flexible
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="One Day"
                      checked={field.value.includes("One Day")}
                      onChange={() => {
                        const newValue = field.value.includes("One Day")
                          ? field.value.filter((item) => item !== "One Day")
                          : [...field.value, "One Day"];
                        field.onChange(newValue);
                      }}
                      className="mr-2"
                    />
                    One Day
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Weekly"
                      checked={field.value.includes("Weekly")}
                      onChange={() => {
                        const newValue = field.value.includes("Weekly")
                          ? field.value.filter((item) => item !== "Weekly")
                          : [...field.value, "Weekly"];
                        field.onChange(newValue);
                      }}
                      className="mr-2"
                    />
                    Weekly
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Monthly"
                      checked={field.value.includes("Monthly")}
                      onChange={() => {
                        const newValue = field.value.includes("Monthly")
                          ? field.value.filter((item) => item !== "Monthly")
                          : [...field.value, "Monthly"];
                        field.onChange(newValue);
                      }}
                      className="mr-2"
                    />
                    Monthly
                  </label>
                  <label className="flex items-center pb-1">
                    <input
                      type="checkbox"
                      value="Yearly"
                      checked={field.value.includes("Yearly")}
                      onChange={() => {
                        const newValue = field.value.includes("Yearly")
                          ? field.value.filter((item) => item !== "Yearly")
                          : [...field.value, "Yearly"];
                        field.onChange(newValue);
                      }}
                      className="mr-2"
                    />
                    Yearly
                  </label>
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

          {/* Budget */}
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl flex gap-2 items-center">
                  <span onClick={() => setBudgetDuration("perHour")} className={`${budgetDuration === "perHour" ? "bg-yellow-500" : "bg-gray-200 text-gray-500"} rounded-sm text-sm py-1 px-2 `}>Per Hour</span>
                  <span onClick={() => setBudgetDuration("perDay")} className={`${budgetDuration === "perDay" ? "bg-yellow-500" : "bg-gray-200 text-gray-500"} rounded-sm text-sm py-1 px-2 `}>Per Day</span>
                  <span onClick={() => setBudgetDuration("salary")} className={`${budgetDuration === "salary" ? "bg-yellow-500" : "bg-gray-200 text-gray-500"} rounded-sm text-sm py-1 px-2 `}>Salary</span>
                </FormLabel>
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