"use client";
import Image from "next/image";
import React from "react";
interface Props {
  title: string;
}
const NextStep = ({ title }: Props) => {
  return (
    <div className="w-full mt-4 bg-bg-before flex justify-between rounded-sm border-black border font-bold px-3 py-2">
      <h1 className="h-[40px] pt-2">{title}</h1>
      <Image src={"/assets/dropdown.svg"} alt="true" width={15} height={23} />
    </div>
  );
};

export default NextStep;
