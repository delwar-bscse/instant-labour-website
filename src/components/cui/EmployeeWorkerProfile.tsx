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
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Schema
const contactUsFormSchema = z
  .object({
    name: z.string(),
    number: z.string().max(11, {
      message: "Please enter a valid phone number.",
    }),
    location: z.string(),
  });

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  name: "",
  number: "",
  location: "",
};

const EmployeeWorkerProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: ContactUsFormValues) {
    console.log("Submitted Data:", data);
    setIsEditMode(false);

    // const res = await myFetch("/users/create", {
    //   method: "POST",
    //   body: {
    //     fullName: data.name,
    //     role: "user",
    //   },
    // });

    // // console.log("Response from server:", res);
    // if (res.success) {
    //   toast.success(`res.message || "Check your email!"`);
    //   localStorage.setItem("createUserToken", JSON.stringify(res?.data?.createUserToken));
    //   router.push("/brand-signup-otp");
    // } else {
    //   toast.error(res.message || "Something went wrong!");
    // }

  }

  return (
    <div className="w-full max-w-[320px] mx-auto">
      {!isEditMode && <div className="border rounded-md shadow p-4">
        <div className="space-y-3">
          <p className="text-gray-600"><span className="font-semibold w-20 inline-block">Name</span>: John Doe</p>
          <p className="text-gray-600"><span className="font-semibold w-20 inline-block">Email</span>: bXm4o@example.com</p>
          <p className="text-gray-600"><span className="font-semibold w-20 inline-block">Contact</span>: +880 1234 567890</p>
          <p className="text-gray-600"><span className="font-semibold w-20 inline-block">Location</span>: Dhaka, Bangladesh</p>
          <p className="text-gray-600"><span className="font-semibold w-20 inline-block">Role</span>: Employer</p>
        </div>
        {/* Submit Button */}
        <div className="mt-2">
          <Button onClick={() => setIsEditMode(true)} variant="yelloBtn" type="button" size="lg" className="w-full mt-4">
            Edit Profile
          </Button>
        </div>
      </div>}



      {isEditMode && <div className="border rounded-md shadow p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">

            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Name</FormLabel>
                  <FormControl>
                    <Input variant="yelloBg2" placeholder="Enter Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Contact Number */}
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Number</FormLabel>
                  <FormControl>
                    <Input variant="yelloBg2" placeholder="Enter Your Number" {...field} />
                  </FormControl>
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
                  <FormLabel className="text-gray-600">Location</FormLabel>
                  <FormControl>
                    <Input variant="yelloBg2" placeholder="Enter Your Location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button variant="yelloBtn" type="submit" size="lg" className="w-full mt-4">
              Save
            </Button>
          </form>
        </Form>
      </div>}
    </div>
  );
};

export default EmployeeWorkerProfile;
