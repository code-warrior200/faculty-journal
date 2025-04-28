"use client";
import { departments } from "./departmentData";
import DepartmentCard from "@/components/DepartmentCard";

export default function DepartmentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-green-700 mb-4">
          Explore Our Departments
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover the diverse fields of study offered by our faculty, driven by excellence and innovation.
        </p>
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept) => (
          <DepartmentCard key={dept.id} department={dept} />
        ))}
      </div>
    </div>
  );
}
