"use client";

import { useState } from "react";
import Image from "next/image";
import { boardMembers } from "@/constant/data";

export default function EditorialBoard() {
  const validTabs = ["science", "najosa"];
  const [activeTab, setActiveTab] = useState("science");

  const filteredMembers = boardMembers.filter(
    (m) => m.category.toLowerCase() === activeTab
  );

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-600 leading-tight">
            Meet Our Editorial Board
          </h1>
          <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Distinguished academics driving innovation, research, and publishing excellence.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white shadow-md rounded-full p-2 space-x-2">
            {validTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-green-700 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab === "science"
                  ? "Faculty of Scientific Research"
                  : "NAJOSA"}
              </button>
            ))}
          </div>
        </div>

        {/* Board Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 p-6 text-center relative"
            >
              <div className="flex justify-center mb-4">
                <div className="relative w-24 h-24">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-4 border-green-300 group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
              <h2 className="text-lg font-bold text-gray-800">{member.name}</h2>
              <p className="text-green-700 mt-1 font-medium">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
