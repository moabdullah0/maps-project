"use client";

import Image from "next/image";
import React from "react";
interface Props {
  title: string;
}
const DoneStep = ({ title }: Props) => {
  return (
    <div className="w-full bg-bg-color-title flex justify-between border px-3 mb-2 rounded-sm border-gray-500">
      <h1 className="h-[40px] pt-2 font-bold">{title}</h1>
      <Image src={"/assets/true.svg"} alt="true" width={15} height={23} />
    </div>
  );
};

export default DoneStep;
