/* eslint-disable react-hooks/exhaustive-deps */
"use client";

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
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { myFetch } from "@/utils/myFetch";
import { Textarea } from "../ui/textarea";
import { CustomModal } from "../modal/CustomModal";
import InputList from "./InputList";
import { toast } from "sonner";
import WorkExperienceModal from "./WorkExperienceModal";

/* ---------------- Constants ---------------- */

const SALARY_TYPE = {
  Hourly: "Hourly",
  DAILY: "Daily",
  MONTHLY: "Monthly",
};

const AVAILABILITY = {
  FULL_TIME: "Full-Time",
  PART_TIME: "Part-Time",
  FLEXIBLE: "Flexible",
  ONE_DAY: "One-Day",
  WEEKLY: "Weekly",
  MONTHLY: "Monthly",
  YEARLY: "Yearly",
};

/* ---------------- Types ---------------- */

type EditProfileFormValues = {
  name?: string;
  category?: string;
  subCategory?: string;
  workOverview?: string;
  about?: string;
  salary?: any;
  availability: string[];
  yearsOfExperience: number;
};

/* ---------------- Default Values ---------------- */

const defaultValues: Partial<EditProfileFormValues> = {
  name: "",
  category: "",
  subCategory: "",
  about: "",
  salary: 0,
  workOverview: "",
  yearsOfExperience: 0,
  availability: [],
};

/* ---------------- Component ---------------- */

const EditProfileComponent = () => {
  const [categoryDatas, setCategoryDatas] = useState<any>([]);
  const [subCategories, setSubCategories] = useState<any>([]);
  const [coreSkills, setCoreSkills] = useState<string[]>([]);
  const [salaryType, setSalaryType] = useState<string>("");
  const [workExperiences, setWorkExperiences] = useState<
    Record<string, string>[]
  >([
    {
      title: "",
      description: "",
    },
  ]);

  const [attachment, setAttachment] = useState<File | null>(null);

  const form = useForm<EditProfileFormValues>({
    defaultValues,
    mode: "onChange",
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAttachment(file);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await myFetch("/category", {
        method: "GET",
      });
      setCategoryDatas(res?.data);
    };
    fetchCategories();
  }, []);

  /* ---------------- Submit ---------------- */

  async function onSubmit(data: EditProfileFormValues) {
    console.log("Image : ", attachment)
    const res = await myFetch("/user/profile", {
      method: "PATCH",
      body: {
        name: data.name,
        category: data.category,
        subCategory: data.subCategory,
        about: data.about,
        salary: Number(data.salary),
        salaryType: salaryType,
        workOverview: data.workOverview,
        availability: data.availability,
        coreSkills: coreSkills,
        workExperiences: workExperiences,
        yearsOfExperience: Number(data.yearsOfExperience),
      },
    });

    if (res.success) {
      toast.success(res.message || "Profile updated!");
    } else {
      toast.error(res.message || "Something went wrong!");
    }
  }

  /* ---------------- Fetch Profile ---------------- */

  const fetchProfile = async () => {
    const response = await myFetch("/user/profile", {
      method: "GET",
    });

    if (response.success) {
      setCoreSkills(response?.data?.coreSkills);
      setSalaryType(response?.data?.salaryType);

      const modifiedWorkExperiences =
        response?.data?.workExperiences?.map(
          (item: Record<string, string>) => ({
            title: item?.title,
            description: item?.description,
          })
        );

      setWorkExperiences(modifiedWorkExperiences);

      form.reset({
        name: response?.data?.name || "",
        category: response?.data?.category || "",
        subCategory: response?.data?.subCategory || "",
        about: response?.data?.about || "",
        salary: Number(response?.data?.salary) || 0,
        workOverview: response?.data?.workOverview || "",
        availability: response?.data?.availability || [],
        yearsOfExperience: response?.data?.yearsOfExperience || 0,
      });
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  /* ---------------- Work Experience ---------------- */

  const addWorkExperience = (data: Record<string, string>) => {
    console.log("Get after hit adWorkExperience function : ", data);
    setWorkExperiences([...workExperiences, data]);
  };

  /* ---------------- JSX ---------------- */

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
                  <Input
                    variant="borderblack"
                    placeholder="Enter full name"
                    {...field}
                  />
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
                <FormLabel className="text-gray-800 text-xl">
                  Category
                </FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    const selectedItem = categoryDatas?.find(
                      (item: any) => item.title === value
                    );
                    setSubCategories(selectedItem?.subCategories);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      variant="borderblack"
                      size="lg"
                      className="w-full"
                    >
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categoryDatas?.map((item: any) => (
                      <SelectItem
                        key={item?._id}
                        value={item?.title}
                      >
                        {item?.title}
                      </SelectItem>
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
            name="subCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl">
                  Sub Category
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      variant="borderblack"
                      size="lg"
                      className="w-full"
                    >
                      <SelectValue placeholder="Select a Sub Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {subCategories?.map((item: string, index: number) => (
                      <SelectItem key={index} value={item}>
                        {item}
                      </SelectItem>
                    ))}
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
                <FormLabel className="text-gray-800 text-xl">
                  Availability
                </FormLabel>
                <div className="space-y-2 flex gap-3 flex-wrap items-center border border-gray-400 py-2 px-3">
                  {Object.entries(AVAILABILITY).map(([key, value]) => (
                    <label key={key} className="flex items-center">
                      <input
                        type="checkbox"
                        value={value}
                        checked={field.value.includes(value)}
                        onChange={() => {
                          const newValue = field.value.includes(value)
                            ? field.value.filter(
                              (item) => item !== value
                            )
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

          {/* Salary */}
          <FormField
            control={form.control}
            name="salary"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl flex gap-2 items-center">
                  {Object.entries(SALARY_TYPE).map(([key, value]) => (
                    <span
                      key={key}
                      onClick={() => setSalaryType(value)}
                      className={`${salaryType === value
                        ? "bg-yellow-500"
                        : "bg-gray-200 text-gray-500"
                        } rounded-sm text-sm py-1 px-2`}
                    >
                      {value}
                    </span>
                  ))}
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    variant="borderblack"
                    placeholder="Enter Your Salary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* About */}
          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl">
                  About Your Self
                </FormLabel>
                <FormControl>
                  <Textarea
                    variant="borderblack"
                    placeholder="Enter about yourself"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Years of Experience */}
          <FormField
            control={form.control}
            name="yearsOfExperience"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl">Years of Experience</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    variant="borderblack"
                    placeholder="Enter Years of Experience"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Attachment */}
          <div>
            <p className="text-gray-800 text-xl font-semibold pb-1">
              Attachment
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="border border-gray-400 p-2 w-full"
            />
          </div>

          {/* Work Overview */}
          <FormField
            control={form.control}
            name="workOverview"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 text-xl">
                  Work Overview
                </FormLabel>
                <FormControl>
                  <Textarea
                    variant="borderblack"
                    placeholder="Enter Work Overview"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <InputList
            title="Core Skills"
            list={coreSkills}
            setList={setCoreSkills}
          />

          {/* Work Experience */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-800 text-lg pb-1.5 font-semibold">
                Work Experience
              </p>
              <CustomModal
                title="Work Experience"
                trigger={
                  <button className="border border-gray-400 px-4 py-1 text-gray-700 cursor-pointer">
                    Add+
                  </button>
                }
              >
                <WorkExperienceModal
                  addWorkExperience={addWorkExperience}
                />
              </CustomModal>
            </div>
            <ul className='w-full space-y-4 list-disc'>
              {workExperiences?.length > 0 && workExperiences?.map((item, index) => (
                <li key={index} className='flex flex-col items-start gap-1'>
                  <span className='flex items-center justify-between w-full'>
                    <span className='text-gray-700 font-semibold'>{index + 1}. {item?.title}</span>
                    <span
                      className="text-red-500 cursor-pointer"
                      onClick={() => {
                        const updatedOffers = workExperiences.filter((_, idx) => index !== idx);
                        setWorkExperiences(updatedOffers);
                      }}
                    >
                      Delete
                    </span>
                  </span>
                  <span className='text-gray-600 text-sm ps-4'>{item?.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            type="submit"
            variant="yelloBtn"
            size="llg"
            className="w-full text-gray-700"
          >
            Confirm
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditProfileComponent;
