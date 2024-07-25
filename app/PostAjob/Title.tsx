"use client";
import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { StepOneFormData } from "./schema";
import { StepTwoFormData } from "./schema";
import { StepThreeFormData } from "./schema";
import { StepFourFormData } from "./schema";
import Image from "next/image";

const Title = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (
    data:
      | StepOneFormData
      | StepTwoFormData
      | StepThreeFormData
      | StepFourFormData
  ) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
    
      <div className="w-full max-w-3xl p-4">
        <h1 className="text-start text-3xl font-bold text-text-color-title mb-8">
          Post a Job
        </h1>
        {step===2? <div className="">
      <div className='w-full bg-bg-color-title flex justify-between border px-3 mb-2 rounded-sm border-gray-500'>
        <h1 className='h-[40px] pt-2 font-bold'>Title</h1>
        <Image src={'/assets/true.svg'} alt='true' width={15} height={23}/>
      </div>
      </div> : step===3? <div className="">
      <div className='w-full bg-bg-color-title flex justify-between border px-3 mb-2 rounded-sm border-gray-500'>
        <h1 className='h-[40px] pt-2 font-bold'>Title</h1>
        <Image src={'/assets/true.svg'} alt='true' width={15} height={23}/>
      </div>
      <div className='w-full bg-bg-color-title flex justify-between border px-3 mb-2 rounded-sm border-gray-500'>
        <h1 className='h-[40px] pt-2 font-bold'>Description and Skills</h1>
        <Image src={'/assets/true.svg'} alt='true' width={15} height={23}/>
      </div>
      </div> :  step===4? <div className="">
      <div className='w-full bg-bg-color-title flex justify-between border px-3 mb-2 rounded-sm border-gray-500'>
        <h1 className='h-[40px] pt-2 font-bold'>Title</h1>
        <Image src={'/assets/true.svg'} alt='true' width={15} height={23}/>
      </div>
      <div className='w-full bg-bg-color-title flex justify-between border px-3 mb-2 rounded-sm border-gray-500'>
        <h1 className='h-[40px] pt-2 font-bold'>Description and Skills</h1>
        <Image src={'/assets/true.svg'} alt='true' width={15} height={23}/>
      </div>
      <div className='w-full bg-bg-color-title flex justify-between border px-3 mb-2 rounded-sm border-gray-500'>
        <h1 className='h-[40px] pt-2 font-bold'>Time and Budget</h1>
        <Image src={'/assets/true.svg'} alt='true' width={15} height={23}/>
      </div>
      </div>:''}
        <div className="shadow-lg shadow-gray-200 z-2 p-8 rounded-md bg-white border border-green-500">
          {step === 1 && <StepOne onNext={handleNext} />}
          {step === 2 && <StepTwo onNext={handleNext} onBack={handleBack} />}
          {step === 3 && <StepThree onNext={handleNext} onBack={handleBack} />}
          {step === 4 && (
            <StepFour
              onSubmit={handleNext}
              onBack={handleBack}
              formData={formData}
            />
          )}
        </div>
        {step === 1 ? (
          <div>
            <div className="w-full mt-4 bg-bg-before flex justify-between rounded-sm border-black border font-bold px-3 py-2">
              <h1 className="h-[40px] pt-2">Description and Skills</h1>
              <Image src={"/assets/dropdown.svg"} alt="true" width={15} height={23} />
            </div>
            <div className="w-full mt-4 bg-bg-before flex justify-between rounded-sm border-black border font-bold px-3 py-2">
              <h1 className="h-[40px] pt-2">Time and Budget</h1>
              <Image src={"/assets/dropdown.svg"} alt="true" width={15} height={23} />
            </div>
            <div className="w-full mt-4 bg-bg-before flex justify-between rounded-sm border-black border font-bold px-3 py-2">
              <h1 className="h-[40px] pt-2">Publish</h1>
              <Image src={"/assets/dropdown.svg"} alt="true" width={15} height={23} />
            </div>
          </div>
        ) : step === 2 ? (
          <div>
            <div className="w-full mt-4 bg-bg-before flex justify-between rounded-sm border-black border font-bold px-3 py-2">
              <h1 className="h-[40px] pt-2">Time and Budget</h1>
              <Image src={"/assets/dropdown.svg"} alt="true" width={15} height={23} />
            </div>
            <div className="w-full mt-4 bg-bg-before flex justify-between rounded-sm border-black border font-bold px-3 py-2">
              <h1 className="h-[40px] pt-2">Publish</h1>
              <Image src={"/assets/dropdown.svg"} alt="true" width={15} height={23} />
            </div>
          </div>
        ) : step === 3 ? (
          <div>
            <div className="w-full mt-4 bg-bg-before flex justify-between rounded-sm border-black border font-bold px-3 py-2">
              <h1 className="h-[40px] pt-2">Time and Budget</h1>
              <Image src={"/assets/dropdown.svg"} alt="true" width={15} height={23} />
            </div>
            <div className="w-full mt-4 bg-bg-before flex justify-between rounded-sm border-black border font-bold px-3 py-2">
              <h1 className="h-[40px] pt-2">Publish</h1>
              <Image src={"/assets/dropdown.svg"} alt="true" width={15} height={23} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Title;
