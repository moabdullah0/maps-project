"use client";
import React, { useState, useEffect } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { StepOneFormData, StepTwoFormData, StepThreeFormData, StepFourFormData } from "./schema";
import NextStep from "@/components/shared/NextStep";
import DoneStep from "@/components/shared/DoneStep";

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setStep(1);
  }, []);

  const handleNext = (
    data: StepOneFormData | StepTwoFormData | StepThreeFormData | StepFourFormData
  ) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const renderDoneSteps = () => {
    switch (step) {
      case 2:
        return (
          <div>
            <DoneStep title="Title" />
          </div>
        );
      case 3:
        return (
          <div>
            <DoneStep title="Title" />
            <DoneStep title="Description and Skills" />
          </div>
        );
      case 4:
        return (
          <div>
            <DoneStep title="Title" />
            <DoneStep title="Description and Skills" />
            <DoneStep title="Time and Budget" />
          </div>
        );
      default:
        return null;
    }
  };

  const renderNextSteps = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <NextStep title="Description and Skills" />
            <NextStep title="Time and Budget" />
            <NextStep title="Publish" />
          </div>
        );
      case 2:
        return (
          <div>
            <NextStep title="Time and Budget" />
            <NextStep title="Publish" />
          </div>
        );
      case 3:
        return (
          <div>
            <NextStep title="Publish" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <div className="w-full max-w-3xl p-4">
        <h1 className="text-start text-3xl font-bold text-text-color-title mb-8">
          Post a Job
        </h1>
        {renderDoneSteps()}
        <div className="shadow-lg shadow-gray-200 z-2 p-8 rounded-md bg-white border border-green-500">
          {step === 1 && <StepOne onNext={handleNext} />}
          {step === 2 && <StepTwo onNext={handleNext} onBack={handleBack} />}
          {step === 3 && <StepThree onNext={handleNext} onBack={handleBack} />}
          {step === 4 && <StepFour onSubmit={handleNext} onBack={handleBack} formData={formData} />}
        </div>
        {renderNextSteps()}
      </div>
    </div>
  );
};

export default Form;
