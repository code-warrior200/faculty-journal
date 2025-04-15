'use client'
import { departments } from "./departmentData";
import DepartmentCard from "@/components/DepartmentCard";

export default function DepartmentsPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mt-20 text-gray-300 mb-8">Faculty Departments</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <DepartmentCard key={dept.id} department={dept} />
        ))}
      </div>
    </div>
  );
}
