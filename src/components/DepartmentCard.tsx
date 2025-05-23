/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

export default function DepartmentCard({ department }: any) {
  return (
    <div className="bg-gray-900 shadow-md rounded-lg p-6 transition hover:shadow-lg">
      <a href={`/departments/${department.id}`} className="text-lg lg:text-2xl font-semibold text-green-500">{department.name}</a>
      <p className="text-gray-200 mt-2">{department.description}</p>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-300">Research Areas:</h3>
        <ul className="list-disc pl-5 text-gray-300">
          {department.researchAreas.map((area: any, index: number) => (
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
