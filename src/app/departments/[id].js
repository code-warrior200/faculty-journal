'use client'
import { departments } from "../departmentData";
import { useRouter } from "next/router";

export default function DepartmentDetails() {
  const router = useRouter();
  const { id } = router.query;
  const department = departments.find((dept) => dept.id === id);

  if (!department) return <p className="text-center text-gray-500 mt-10">Department not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-600">{department.name}</h1>
      <p className="text-gray-700 mt-4">{department.description}</p>

      {/* Faculty Members */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Faculty Members</h2>
        <ul className="mt-2 space-y-2">
          {department.facultyMembers.map((member, index) => (
            <li key={index} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <p className="font-medium text-gray-900">{member.name}</p>
              <p className="text-sm text-gray-600">Specialization: {member.specialization}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Research Areas */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Research Areas</h2>
        <ul className="list-disc pl-5 text-gray-600">
          {department.researchAreas.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>

      {/* Journals */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Recent Journals</h2>
        <ul className="mt-2 space-y-2">
          {department.journals.map((journal, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="font-medium">{journal.title}</p>
              <p className="text-gray-600 text-sm">By {journal.author} - {journal.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
