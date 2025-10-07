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
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Schema
const contactUsFormSchema = z
  .object({
    name: z.string(),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    number: z.string().max(11, {
      message: "Please enter a valid phone number.",
    }),
    location: z.string(),
    role: z.string(),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  name: "",
  email: "",
  number: "",
  location: "",
  role: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: ContactUsFormValues) {
    console.log("Submitted Data:", data);
    router.push("/login");

    // const res = await myFetch("/users/create", {
    //   method: "POST",
    //   body: {
    //     fullName: data.name,
    //     email: data.email,
    //     password: data.password,
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
    <div className="">
      <div className="px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-600 text-center">Sign Up</h2>
        <p className="text-gray-500 text-center pt-2 pb-4">Join And Start Hiring or Working</p>



        <div className="">
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

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600">Email</FormLabel>
                    <FormControl>
                      <Input variant="yelloBg2" placeholder="Enter email" {...field} />
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
                      <Input variant="yelloBg2" placeholder="Enter email" {...field} />
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
                      <Input variant="yelloBg2" placeholder="Enter email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Role */}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600">Role</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger variant="yelloBg" size="lg" className="w-full">
                          <SelectValue placeholder="Select a Role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Employer">Employer</SelectItem>
                        <SelectItem value="Worker">Worker</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          variant="yelloBg2"
                          placeholder="Enter password"
                          className="pr-10"
                          {...field}
                        />
                        <div
                          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-500 z-10"
                          onClick={() => setShowPassword(prev => !prev)}
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600">Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          variant="yelloBg2"
                          placeholder="Enter confirm password"
                          className="pr-10"
                          {...field}
                        />
                        <div
                          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-500 z-10"
                          onClick={() => setShowConfirmPassword(prev => !prev)}
                        >
                          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center pt-3">
                <input type="checkbox" className="mr-2" />
                <div className="flex flex-wrap text-gray-700 gap-2">
                  <span>By continue</span>
                  <span className="text-blue-600"> policy and terms </span>
                  <span>and</span>
                  <span className="text-blue-600">terms & condition</span>
                </div>
              </div>

              {/* Submit Button */}
              <Button variant="yelloBtn" type="submit" size="lg" className="w-full mt-1">
                Sign Up
              </Button>

              <div className="relative -top-2 flex justify-center items-center gap-2">
                Already have an account !
                <Link href="/login" className="text-yellow-500 hover:text-gray-600 font-semibold">
                  Login
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
