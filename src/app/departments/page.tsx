"use client";
import { departments } from "@/constant/data";
import DepartmentCard from "@/components/DepartmentCard";

export default function DepartmentsPage() {
  return (
    <div className="lg:max-w-7xl mx-auto lg:px-6 py-20">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-xl lg:text-3xl font-extrabold text-green-600 mb-4">
          Explore Our Departments
        </h1>
        <p className="text-gray-300 text-sm lg:text-lg max-w-2xl mx-auto">
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
