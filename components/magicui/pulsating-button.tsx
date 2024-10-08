"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   duration?: string;
}

export default function PulsatingButton({
  className,
  children,
   duration = "1.5s",
  ...props
}: PulsatingButtonProps) {
  return (
    <button
      className={cn(
        "w-[280px] relative h-[35px] sm:h-[46px] text-center cursor-pointer flex justify-center items-center rounded-lg text-[#141736] dark:text-black bg-[#FFFFFF] dark:bg-blue-500 px-4 py-2",
        className,
      )}
      style={
        {
          "--pulse-color": '#fff',
          "--duration": duration,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute top-1/2 left-1/2 size-full rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
    </button>
  );
}
