'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { departments } from "../departmentData";

const DepartmentDetails = () => {
    const { id } = useParams()

    console.log(id)

    const department = departments.find((dept) => dept.id === id);

    console.log(department)

    if (!department) return <p className="text-center text-gray-500 mt-10">Department not found.</p>;  
  return (
    <div className="max-w-4xl mx-auto p-6 py-15">
      <h1 className="text-4xl font-bold text-green-600">{department.name}</h1>
      <p className="text-gray-200 mt-4">{department.description}</p>

      {/* Faculty Members */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-white">Faculty Members</h2>
        <ul className="mt-2 space-y-2">
          {department.departmentMembers.map((member, index) => (
            <li key={index} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <p className="font-medium text-gray-900">{member.name}</p>
              <p className="text-sm text-gray-600">Specialization: {member.specialization}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Research Areas */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-white">Research Areas</h2>
        <ul className="list-disc pl-5 text-gray-300">
          {department.researchAreas.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>

      {/* Journals */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-white">Recent Journals</h2>
        <ul className="mt-2 space-y-2">
          {department.journals.map((journal, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="font-medium text-black">{journal.title}</p>
              <p className="text-gray-600 text-sm">By {journal.author} - {journal.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DepartmentDetails