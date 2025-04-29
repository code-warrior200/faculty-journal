// components/JournalCard.tsx
"use client";
import { FaDownload, FaEye } from "react-icons/fa";

interface JournalCardProps {
  id: string;
  title: string;
  authorName: string;
  department: string;
  description: string;
  downloads: number;
  views: number;
  posterUrl?: string;
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
}: JournalCardProps) {
  return (
    <div
      key={id}
      className="bg-white border rounded-lg shadow-md hover:shadow-lg transition flex flex-col overflow-hidden"
    >
      {/* Poster */}
      <img
        src={posterUrl || "/placeholder.jpg"}
        alt="Journal Poster"
        className="h-60 w-full object-cover"
      />

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">{title}</h2>
          <p className="text-sm text-gray-500 mb-2">By {authorName}</p>
          <p className="text-sm text-gray-400 mb-3">{department}</p>
          <p className="text-gray-700 text-sm line-clamp-3">{description}</p>
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center mt-4 text-gray-600">
          <div className="flex items-center gap-2">
            <FaDownload />
            <span className="text-sm">{downloads || 0}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEye />
            <span className="text-sm">{views || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
