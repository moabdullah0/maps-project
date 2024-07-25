import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepFourSchema, StepFourFormData } from "./schema";
import Image from "next/image";
import Select from "react-select";

const StepFour = ({
  onSubmit,
  onBack,
  formData,
}: {
  onSubmit: (data: StepFourFormData) => void;
  onBack: () => void;
  formData: any;
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<StepFourFormData>({
    resolver: zodResolver(stepFourSchema),
  });

  const submitHandler = (data: StepFourFormData) => {
    const finalData = { ...formData, ...data };
    console.log(finalData);
  };

  const InviteFreelancers = [
    { value: "Mohamad", label: "Mohamad" },
    { value: "Abd", label: "Abd" },
  ];

  const handleInviteChange = (selectedOptions: any) => {
    setValue("Invite", selectedOptions);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
  <h1 className="font-bold">Publish</h1>
      <div className="mt-4">
        <label
          htmlFor="jobAudience"
          className="block text-sm font-medium text-gray-700"
        >
          Job Audience
        </label>
        <div className="mt-1 flex items-center">
          <input
            id="public"
            {...register("jobAudience")}
            type="radio"
            value="Public"
            className="form-radio"
          />
          <label htmlFor="public" className="ml-2 block text-sm text-gray-900">
            Public
          </label>
          <input
            id="invite"
            {...register("jobAudience")}
            type="radio"
            value="Invite freelancer"
            className="form-radio ml-4"
          />
          <label htmlFor="invite" className="ml-2 block text-sm text-gray-900">
            Invite freelancer
          </label>
        </div>
        {errors.jobAudience && (
          <span className="text-red-500 text-sm">
            {errors.jobAudience.message}
          </span>
        )}
      </div>
      <div className="mt-4">
        <label
          htmlFor="Invite"
          className="block text-sm font-medium text-gray-700"
        >
          Skills
        </label>
        <Select
          id="Invite"
          isMulti
          options={InviteFreelancers}
          className="mt-1"
          classNamePrefix="select"
          onChange={handleInviteChange}
        />
        {errors.Invite && (
          <span className="text-red-500 text-sm">{errors.Invite.message}</span>
        )}
      </div>
      <div className="mt-6 flex justify-between">
      <button
          type="button"
          onClick={onBack}
          className="inline-flex justify-center rounded-md  border-b border-b-gray-500 text-font-text-back py-2 px-4 text-sm font-medium   hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-flex justify-center bg-button-color rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default StepFour;
