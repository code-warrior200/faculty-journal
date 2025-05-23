"use client";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchAllJournalApi } from '@/service/journel-service';
import JournalCard from "@/components/journal-card";

export default function Journals() {
  const [journals, setJournals] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchJournal = async () => {
      const response = await fetchAllJournalApi();
      if (response.journals) {
        setJournals(response.journals);
        setLoading(false);
      }
    };

    fetchJournal();
  }, []);

  const filteredJournals = journals
    .filter((journal) => 
      journal.title.toLowerCase().includes(search.toLowerCase()) &&
      (departmentFilter ? journal.department === departmentFilter : true)
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

  const uniqueDepartments = [...new Set(journals.map((journal) => journal.department))];

  return (
    <div className="w-full lg:max-w-6xl mx-auto  mt-10 py-6">
      {/* Header */}
      <h1 className="text-xl lg:text-3xl font-bold text-center text-green-600 mb-8">Journals</h1>

      {/* Filters */}
      <div className="lg:flex items-center space-y-5 lg:space-y-0 py-20 px-10 bg-[url('/science.jpg')] bg-cover bg-center bg-no-repeat w-full justify-between mb-10">
        
        {/* Search Bar */}
        <div className="w-full md:w-[35%]">
          <div className="relative  rounded-lg shadow-sm">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search journals..."
              className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border outline-none border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition text-gray-500 shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Filters Section */}
        <div className="w-full md:w-fit lg:flex gap-4 space-y-5 lg:space-y-0">
          {/* Department Select */}
          <div className="px-4 py-3 bg-white rounded-lg text-black">
            <select className='w-full outline-none text-sm'>
                <option value="">All Departments</option>
                {uniqueDepartments.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
            </select>
          </div>

          {/* Sort Select */}
          <div className="px-4 py-3 bg-white rounded-lg text-black">
            <select
              className='w-full outline-none text-sm'
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Sort A-Z</option>
              <option value="desc">Sort Z-A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Loading */}
      {loading && <p className="text-center text-gray-500">Loading journals...</p>}

      {/* Journals Grid */}
      {!loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJournals.map((journal) => (
            <JournalCard
              key={journal._id}
              id={journal._id}
              title={journal.title}
              authorName={journal.authorName}
              department={journal.department}
              description={journal.description}
              downloads={journal.downloads}
              views={journal.views}
              posterUrl={journal.posterUrl}
              fileUrl={journal.fileUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
}
