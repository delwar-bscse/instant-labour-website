/* eslint-disable @typescript-eslint/no-explicit-any */

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
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const defaultValues = {
  title: "",
  description: "",
};

export default function WorkExperienceModal({setWorkExperienceInput}:{setWorkExperienceInput: React.Dispatch<React.SetStateAction<Record<string, string>>>}) {

  const form = useForm({
    defaultValues,
    mode: "onChange",
  });


  async function onSubmit(data: any) {
    console.log("Submitted Data:", data);

    setWorkExperienceInput({
      title: data.title,
      description: data.description
    });


    document.getElementById("cancel")?.click()
    form.reset();
  }


  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          {/* Name */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600 text-lg">Job Title</FormLabel>
                <FormControl>
                  <Input variant="borderblack" placeholder="Enter job title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* About Me */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea variant="borderblack" placeholder="Enter description" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button variant="yelloBtn" type="submit" size="lg" className="w-full mt-4">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}