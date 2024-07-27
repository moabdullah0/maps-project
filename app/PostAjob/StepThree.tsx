import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepThreeSchema, StepThreeFormData } from "./schema";

const StepThree = ({
  onNext,
  onBack,
}: {
  onNext: (data: StepThreeFormData) => void;
  onBack: () => void;
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<StepThreeFormData>({
    resolver: zodResolver(stepThreeSchema),
    defaultValues: {
      jobType: "",
      from: undefined,
      to: undefined,
      deadline: "",
    },
  });

  useEffect(() => {
    const storedData = localStorage.getItem("stepThreeData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setValue("jobType", parsedData.jobType);
      setValue("from", parsedData.from);
      setValue("to", parsedData.to);
      setValue("deadline", parsedData.deadline);
    }
  }, [setValue]);

  const onSubmit = (data: StepThreeFormData) => {
    localStorage.setItem("stepThreeData", JSON.stringify(data));
    onNext(data);
  };

  return (
    <div className="p-4 border rounded-md shadow-md bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="font-bold text-lg mb-4">Time and Budget</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="jobType"
              className="block text-sm font-medium text-gray-700"
            >
              Job Type
            </label>
            <select
              id="jobType"
              {...register("jobType")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-[50px] border focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="Hourly">Hourly</option>
              <option value="Fixed">Fixed</option>
            </select>
            {errors.jobType && (
              <span className="text-red-500 text-sm">
                {errors.jobType.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="from"
              className="block text-sm font-medium text-gray-700"
            >
              From (Optional)
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                $
              </span>
              <input
                type="number"
                step="0.01"
                id="from"
                {...register("from")}
                className="pl-7 block w-full rounded-md border-gray-300 shadow-sm h-[50px] border focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            {errors.from && (
              <span className="text-red-500 text-sm">
                {errors.from.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="to"
              className="block text-sm font-medium text-gray-700"
            >
              To (Optional)
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                $
              </span>
              <input
                type="number"
                step="0.01"
                id="to"
                {...register("to")}
                className="pl-7 block w-full rounded-md border-gray-300 shadow-sm h-[50px] border focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            {errors.to && (
              <span className="text-red-500 text-sm">{errors.to.message}</span>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="deadline"
            className="block text-sm font-medium text-gray-700"
          >
            Application Deadline
          </label>
          <input
            type="date"
            id="deadline"
            {...register("deadline")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-[50px] border focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.deadline && (
            <span className="text-red-500 text-sm">
              {errors.deadline.message}
            </span>
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
    </div>
  );
};

export default StepThree;
