"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Suspense } from "react"; // Import Suspense
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { myFetch } from "@/utils/myFetch";

// Schema
const contactUsFormSchema = z
  .object({
    verifyOtp: z.string(),
  });

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  verifyOtp: "",
};

const VerifyOtpSuspense = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const router = useRouter();

  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: ContactUsFormValues) {
    const userEmail = localStorage.getItem("userEmail") || ""
    const res = await myFetch("/auth/verify-account", {
      method: "POST",
      body: {
        email: userEmail,
        oneTimeCode: data.verifyOtp,
      },
    });

    if (res.success) {
      localStorage.removeItem("userEmail");
      if (type === "password") {
        localStorage.setItem("authToken", res?.data?.token);
        router.push("/reset-password");
      } else {
        router.push("/login");
      }
    } else {
      toast.error(res.message || "Invalid OTP, please try again.");
    }
  }

  const handleResend = async () => {
    const userEmail = localStorage.getItem("userEmail") || ""
    const res = await myFetch("/auth/forget-password", {
      method: "POST",
      body: {
        email: userEmail,
        authType: "resetPassword"
      },
    });
    if (res.success) {
      toast.success(res.message || "OTP sent successfully!");
    } else {
      toast.error(res.message || "Please try again.");
    }
  }

  return (
    <div className="px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full overflow-hidden">
      <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-600 pb-2 text-center">Verify OTP</h2>
      <p className="text-gray-600 text-center pb-8">We’ve sent a one-time password (OTP) to your email/phone. Please enter the code below to continue.</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="verifyOtp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup className="">
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between">
            <div></div>
            <button type="button" onClick={handleResend} className="text-blue-500 cursor-pointer hover:text-blue-600 transition-colors duration-200">Resend OTP</button>
          </div>

          <Button variant="yelloBtn" type="submit" size="llg" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

const VerifyOtp = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyOtpSuspense />
    </Suspense>
  );
}

export default VerifyOtp