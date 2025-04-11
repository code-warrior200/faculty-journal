'use client'
import Link from "next/link";

export default function DepartmentCard({ department }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 transition hover:shadow-lg">
      <h2 className="text-2xl font-semibold text-green-500">{department.name}</h2>
      <p className="text-gray-700 mt-2">{department.description}</p>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">Research Areas:</h3>
        <ul className="list-disc pl-5 text-gray-600">
          {department.researchAreas.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>

      {/* <Link href={`/departments/${department.id}`} className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
        View Department Members
      </Link> */}
    </div>
  );
}
