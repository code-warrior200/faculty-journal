"use client";
import React from "react";
import { useParams } from "next/navigation";
import { departments } from "@/constant/data";

const DepartmentDetails = () => {
  const { id } = useParams();
  const department = departments.find((dept) => dept.id === id);

  if (!department) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg">Department not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Department Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-4">
          {department.name}
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          {department.description}
        </p>
      </div>

      {/* Faculty Members Section */}
      <section className="mb-16">
        {/* <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Faculty Members
        </h2> */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {department.departmentMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg p-6 transition duration-300 border border-gray-100"
            >
              <p className="text-xl font-semibold text-gray-800">{member.name}</p>
              <p className="text-green-600 mt-1 text-sm">
                Position: {member.Possition}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-green-600 mb-6">
          Research Areas
        </h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          {department.researchAreas.map((area, index) => (
            <li key={index} className="text-lg">{area}</li>
          ))}
        </ul>
      </section>

      {/* Recent Journals Section */}
      <section>
        <h2 className="text-3xl font-bold text-green-600 mb-6">
          Recent Journals
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {department.journals.map((journal, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md p-6 border border-gray-200 transition duration-300"
            >
              <p className="text-lg font-semibold text-gray-900 mb-2">
                {journal.title}
              </p>
              <p className="text-sm text-gray-600">
                By {journal.author} • {journal.date}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DepartmentDetails;
