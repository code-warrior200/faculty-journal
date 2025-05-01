/* eslint-disable @typescript-eslint/no-explicit-any */
// components/FormTextarea.tsx
"use client";

import React from "react";

export default function FormTextarea({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-gray-200 font-medium">{label}</label>
      <textarea
        className="mt-2 w-full p-3 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
}
