/* eslint-disable @typescript-eslint/no-explicit-any */
// components/FormFileUpload.tsx
"use client";

import React from "react";

export default function FormFileUpload({ label, accept, onChange, required }: any) {
  return (
    <div className="bg-gray-900">
      <label className="block text-gray-200 font-medium">{label}</label>
      <input
        type="file"
        accept={accept}
        required={required}
        onChange={onChange}
        className="mt-2 w-full p-3 border border-gray-300 text-white rounded-lg bg-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-white file:bg-green-500 hover:file:bg-green-600 cursor-pointer"
      />
    </div>
  );
}
