"use client";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa"; // Import search icon

export default function Journals() {
  const [journals, setJournals] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/journals")
      .then((res) => res.json())
      .then((data) => {
        setJournals(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">📚 Journals</h1>

      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-8">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search journals..."
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Loading State */}
      {loading && <p className="text-center text-gray-500">Loading journals...</p>}

      {/* Journals Grid */}
      {!loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {journals
            .filter((journal) => journal.title.toLowerCase().includes(search.toLowerCase()))
            .map((journal) => (
              <div
                key={journal.id}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{journal.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{journal.category}</p>
                <p className="text-gray-700">{journal.description}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
