"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaDownload, FaEye } from "react-icons/fa";
import { downloadApi } from "@/service/journel-service";
import { useEffect, useState } from "react";

interface JournalCardProps {
  id: string;
  title: string;
  authorName: string;
  department: string;
  description: string;
  downloads: number;
  views: number;
  posterUrl?: string;
  fileUrl?: string;
}

export default function JournalCard({
  id,
  title,
  authorName,
  department,
  description,
  downloads,
  views,
  posterUrl,
  fileUrl,
}: JournalCardProps) {
  const [formData, setFormData] = useState({ userIp: "", device: "", journalId: '' });

  useEffect(() => {
    const fetchIp = async () => {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      const userAgent = `${navigator.platform} | ${navigator.userAgent}`;
      setFormData({
        userIp: data.ip,
        device: userAgent,
        journalId: id
      });
    };
    fetchIp();
  }, []);

  const handleDownload = async () => {
    try {
      await downloadApi(formData);

      if (fileUrl) {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error: any) {
      console.error("Download error:", error.response?.message || error.message);
    }
  };

  return (
    <div
      key={id}
      className="bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition flex flex-col overflow-hidden"
    >
      <img
        src={posterUrl || "/placeholder.jpg"}
        alt="Journal Poster"
        className="h-60 w-full object-cover"
      />

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-1">{title}</h2>
          <p className="text-sm text-gray-200 mb-2">By {authorName}</p>
          <p className="text-sm text-gray-200 mb-3">{department}</p>
          <p className="text-gray-200 text-sm line-clamp-3">{description}</p>
        </div>

        <div className="flex justify-between items-center mt-4 text-gray-600">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1 text-green-600 hover:text-green-800 focus:outline-none"
            >
              <FaDownload />
              <span className="text-sm">{downloads || 0}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <FaEye />
            <span className="text-sm text-white">{views || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
