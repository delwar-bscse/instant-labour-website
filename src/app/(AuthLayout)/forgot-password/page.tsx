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
import { useRouter } from "next/navigation";
import { myFetch } from "@/utils/myFetch";
import { toast } from "sonner";

// Schema
const contactUsFormSchema = z
  .object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    })
  });

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  email: "",
};

const ForgotPassword = () => {
  const router = useRouter();

  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: ContactUsFormValues) {

    const res = await myFetch("/auth/forget-password", {
      method: "POST",
      body: {
        email: data.email,
      },
    })

    if (res.success) {
      localStorage.setItem("userEmail", data.email);
      router.push(`/verify-otp?type=password`);
    } else {
      toast.error(res?.message || "Failed to send reset code.");
    }
  }


  return (
    <div className="px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full">
      <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-600 pb-12 text-center">Forgot Password</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-gray-500 text-lg">Email</FormLabel>
                <FormControl>
                  <Input variant="yelloBg2" placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button variant="yelloBtn" type="submit" size="llg" className="w-full">
            Send Reset Code
          </Button>

        </form>
      </Form>
    </div>
  );
};

export default ForgotPassword;
