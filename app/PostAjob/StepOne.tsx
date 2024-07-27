import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { stepOneSchema, StepOneFormData } from './schema';
import TextInput from '@/components/shared/InputField';
import Select from 'react-select';
import Image from 'next/image';

const languageOptions = [
  { value: 'English', label: 'English' },
  { value: 'Arabic', label: 'Arabic' },
];

const StepOne = ({ onNext }: { onNext: (data: StepOneFormData) => void }) => {
  const storedData = typeof window !== 'undefined' ? localStorage.getItem('stepOneData') : null;
  const defaultValues = storedData ? JSON.parse(storedData) : {
    title: "",
    category: "",
    subcategory: "",
    country: "",
    language: [],
  };

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<StepOneFormData>({
    resolver: zodResolver(stepOneSchema),
    defaultValues,
  });

  const handleLanguageChange = (selectedOptions: any) => {
    setValue('language', selectedOptions);

  };

  const onSubmit = (data: StepOneFormData) => {
    localStorage.setItem('stepOneData', JSON.stringify(data));
    onNext(data);
  };

  useEffect(() => {
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setValue('title', parsedData.title);
      setValue('category', parsedData.category);
      setValue('subcategory', parsedData.subcategory);
      setValue('country', parsedData.country);
      setValue('language', parsedData.language);
    }
  }, [setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className='font-bold mb-2'>Title</h1>
      <div className="mt-4">
        <div className='flex gap-2'>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Job Title</label>
          <Image src={'/assets/error_FILL0_wght400_GRAD0_opsz24.svg'} alt='error' width={15} height={23}/>
        </div>
        <TextInput id="title" title="" type="text" register={register} />
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title.message}</span>
        )}
      </div>

      <div className="mt-4 grid   lg:grid-cols-2 sm:grid-col-1 gap-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <select
            id="category"
            {...register('category')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-md shadow-gray-200 h-[50px] border focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Select</option>
            <option value="option one">Option one</option>
          </select>
          {errors.category && (
            <span className="text-red-500 text-sm">{errors.category.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">Subcategory</label>
          <select
            id="subcategory"
            {...register('subcategory')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-md shadow-gray-200 h-[50px] border focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Select</option>
            <option value="option one">Option one</option>
          </select>
          {errors.subcategory && (
            <span className="text-red-500 text-sm">{errors.subcategory.message}</span>
          )}
        </div>
      </div>

      <div className="mt-4 grid lg:grid-cols-2 sm:grid-col-1 gap-4">
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country (Optional)</label>
          <select
            id="country"
            {...register('country')}
            className="mt-1 shadow-gray-200 block w-full rounded-md border-gray-300 shadow-md h-[50px] border focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Select</option>
            <option value="option one">Option one</option>
          </select>
        </div>
        <div>
          <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
          <Select
          id="skills"
          isMulti
          options={languageOptions}
          className="mt-1"
          classNamePrefix="select"
          onChange={handleLanguageChange}
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
              ':hover': {
                backgroundColor: "#FF6B6B", 
                color: "#FFF",
              },
            }),
          }}
        />
          {errors.language && (
            <span className="text-red-500 text-sm">{errors.language.message}</span>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="inline-flex lg:w-[64px] w-full justify-center bg-button-color rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default StepOne;
