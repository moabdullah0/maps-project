import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import { StepFourFormData, stepFourSchema } from "./schema";

const StepFour = ({
  onBack,
  formData,
}: {
  onSubmit: (data: StepFourFormData) => void;
  onBack: () => void;
  formData: any;
}) => {
  const [inviteSelected, setInviteSelected] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<StepFourFormData>({
    resolver: zodResolver(stepFourSchema),
  });

  const submitHandler = async (data: StepFourFormData) => {
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

  const handleJobAudienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "Invite freelancer") {
      setInviteSelected(e.target.checked);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <h1 className="font-bold">Post a Job</h1>
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
            type="checkbox"
            value="Public"
            className="form-checkbox"
          />
          <label htmlFor="public" className="ml-2 block text-sm text-gray-900">
            Public
          </label>
          <input
            id="invite"
            {...register("jobAudience")}
            type="checkbox"
            value="Invite freelancer"
            className="form-checkbox ml-4"
            onChange={handleJobAudienceChange}
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
      {inviteSelected && (
        <div className="mt-4">
          <label
            htmlFor="Invite"
            className="block text-sm font-medium text-gray-700"
          >
            Invite Freelancers (Optional)
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
            <span className="text-red-500 text-sm">
              {errors.Invite.message}
            </span>
          )}
        </div>
      )}
      <div className="mt-6 flex lg:justify-between lg:flex-row flex-col-reverse justify-center gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex justify-center rounded-md border-b border-b-gray-500 text-font-text-back py-2 px-4 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="submit"
          onClick={()=>{localStorage.clear();}}
          className="inline-flex justify-center bg-button-color rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default StepFour;
