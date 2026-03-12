"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function WorkExperienceModal({
  addWorkExperience,
}: {
  addWorkExperience: (data: Record<string, string>) => void;
}) {
  const [workExperienceInput, setWorkExperienceInput] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setWorkExperienceInput((prev) => ({...prev,[name]: value,}));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //console.log("Submitted Data:", workExperienceInput);
    addWorkExperience(workExperienceInput);

    document.getElementById("cancel")?.click();
  };

  return (
    <div>
      <form  className="space-y-3">
        {/* Job Title */}
        <div>
          <label className="text-gray-600 text-lg">Job Title</label>
          <Input
            name="title"
            value={workExperienceInput.title}
            onChange={handleChange}
            variant="borderblack"
            placeholder="Enter job title"
          />
        </div>

        {/* Description */}
        <div>
          <label>Description</label>
          <Textarea
            name="description"
            value={workExperienceInput.description}
            onChange={handleChange}
            variant="borderblack"
            placeholder="Enter description"
            className=""
          />
        </div>

        {/* Submit Button */}
        <Button
          variant="yelloBtn"
          type="button"
          onClick={onSubmit}
          size="lg"
          className="w-full mt-4"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
