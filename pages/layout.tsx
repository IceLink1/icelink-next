import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <div className="absolute flex flex-col h-screen left-0">
    {children}
  </div>;
}
