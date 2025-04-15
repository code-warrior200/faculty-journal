"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";

const boardMembers = [
  {
    name: "Prof. John Doe",
    position: "Chief Editor",
    department: "Physics",
    image: "/editor1.jpg",
    bio: "Expert in quantum mechanics with 20+ years of research experience.",
    category: "science",
  },
  {
    name: "Dr. Jane Smith",
    position: "Deputy Editor",
    department: "Biology",
    image: "/editor2.jpg",
    bio: "Specialist in microbiology and genetic engineering research.",
    category: "science",
  },
  {
    name: "Dr. Ahmed Hassan",
    position: "Associate Editor",
    department: "Computer Science",
    image: "/editor3.jpg",
    bio: "AI researcher focused on machine learning and neural networks.",
    category: "najosa",
  },
  {
    name: "Dr. Sarah Johnson",
    position: "Editorial Board Member",
    department: "Environmental Science",
    image: "/editor4.jpg",
    bio: "Studies the impact of climate change on marine ecosystems.",
    category: "najosa",
  },
  {
    name: "Prof. Michael Brown",
    position: "Editorial Board Member",
    department: "Chemistry",
    image: "/editor5.jpg",
    bio: "Specialist in organic chemistry and drug synthesis.",
    category: "science",
  },
  {
    name: "Dr. Emily White",
    position: "Editorial Board Member",
    department: "Mathematics",
    image: "/editor6.jpg",
    bio: "Focuses on applied mathematics in computational science.",
    category: "najosa",
  },
];

export default function EditorialBoard() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const validTabs = ["science", "najosa"];

  const tabParam = searchParams.get("tab");
  const defaultTab = validTabs.includes(tabParam) ? tabParam : "science";

  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [tabParam]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    router.push(`?tab=${tab}`);
  };

  const filteredMembers = boardMembers.filter((m) => m.category === activeTab);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-4">
          Editorial Board
        </h1>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Meet the distinguished academics leading the Faculty of Science & NAJOSA journals, contributing their expertise to research and publication excellence.
        </p>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-10">
          {validTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={clsx(
                "relative px-6 py-3 text-base md:text-lg font-medium rounded-full transition-all duration-300",
                activeTab === tab
                  ? "bg-green-700 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              )}
            >
              {tab === "science" ? "Faculty of Science" : "NAJOSA"}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="rounded-full border-4 border-green-100 shadow-sm"
                />
              </div>
              <h2 className="text-xl font-semibold text-center text-gray-800">{member.name}</h2>
              <p className="text-green-700 text-center font-medium">{member.position}</p>
              <p className="text-sm text-center text-gray-500">{member.department} Department</p>
              <p className="mt-3 text-sm text-center text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
