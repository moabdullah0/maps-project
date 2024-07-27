import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepTwoSchema, StepTwoFormData } from "./schema";
import TinyMCEEditor from "@/components/shared/TinyMCEEditor";
import Select from "react-select";

const skillsOptions = [
  { value: "Graphic Design", label: "Graphic Design" },
  { value: "UI/UX", label: "UI/UX" },
];

const StepTwo = ({
  onNext,
  onBack,
}: {
  onNext: (data: StepTwoFormData) => void;
  onBack: () => void;
}) => {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<StepTwoFormData>({
    resolver: zodResolver(stepTwoSchema),
  });
  const [description, setDescription] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("stepTwoData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setValue("description", parsedData.description);
      setValue("skills", parsedData.skills);
      setDescription(parsedData.description);
    }
  }, [setValue]);

  const handleEditorChange = (content: string) => {
    setDescription(content);
    setValue("description", content);
    const currentData = JSON.parse(localStorage.getItem("stepTwoData") || "{}");
    localStorage.setItem(
      "stepTwoData",
      JSON.stringify({ ...currentData, description: content })
    );
  };

  const handleSkillsChange = (selectedOptions: any) => {
    setValue("skills", selectedOptions);
    const currentData = JSON.parse(localStorage.getItem("stepTwoData") || "{}");
    localStorage.setItem(
      "stepTwoData",
      JSON.stringify({ ...currentData, skills: selectedOptions })
    );
  };

  const onSubmit = (data: StepTwoFormData) => {
    localStorage.setItem("stepTwoData", JSON.stringify(data));
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="font-bold mb-2">Description and Skills</h1>
      <div className="mt-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Job Description
        </label>
        <TinyMCEEditor
          value={description}
          onEditorChange={handleEditorChange}
        />
        {errors.description && (
          <span className="text-red-500 text-sm">
            {errors.description.message}
          </span>
        )}
      </div>

      <div className="mt-4">
        <label
          htmlFor="skills"
          className="block text-sm font-medium text-gray-700"
        >
          Skills
        </label>
        <Select
          id="skills"
          isMulti
          options={skillsOptions}
          className="mt-1"
          classNamePrefix="select"
          onChange={handleSkillsChange}
          styles={{
            multiValue: (base) => ({
              ...base,
              backgroundColor: "#D6FFD0",
            }),
            multiValueLabel: (base) => ({
              ...base,
              color: "#000",
            }),
            multiValueRemove: (base) => ({
              ...base,
              color: "#000",
              ":hover": {
                backgroundColor: "#FF6B6B",
                color: "#FFF",
              },
            }),
          }}
        />
        {errors.skills && (
          <span className="text-red-500 text-sm">{errors.skills.message}</span>
        )}
      </div>

      <div className="mt-6 flex lg:justify-between lg:flex-row flex-col-reverse justify-center gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex justify-center  rounded-md  border-b border-b-gray-500 text-font-text-back py-2 px-4 text-sm font-medium   hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-flex justify-center bg-button-color rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default StepTwo;
