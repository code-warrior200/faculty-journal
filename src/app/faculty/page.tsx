'use client'
import { FaBookOpen, FaRocket, FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { fetchAllJournalApi } from '@/service/journel-service';
import JournalCard from "@/components/journal-card";
import { Journal  } from '@/interface/types'

export default function Home() {
    const [journals, setJournals] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const fetchJournal = async () => {
            const response = await fetchAllJournalApi();
            if (response.journals) {
                setJournals(response.journals);
                console.log(response.journals)
                setLoading(false);
            }
        };
        fetchJournal();
    }, []);
  
    const filteredJournals = journals
    .sort((a: Journal, b: Journal) => b.downloads - a.downloads)
    .slice(0, 6);
  
  
    return (
        <div className="lg:max-w-6xl mx-auto">
            {/* Science SVG Background */}
            <div className="absolute inset-0 bg-[url('/science.jpg')] bg-cover opacity-10"></div>

      {/* Hero Section with Background Image */}
      <section className="text-center mt-15 p-0 lg:px-20 lg:py-16 text-green-700 lg:mx-4 max-w-full relative bg-[url('/science.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="bg-gray-100 opacity-85 p-10 rounded-lg">
          <h1 className="text-xl md:text-3xl font-bold">Faculty of Sciences Education Journal of Scientific Research.</h1>
          <p className="mt-4 font-bold text-sm lg:text-lg">Fedral University Of Eduction Zaria (FUEZ) & Nigeria Journal Of Science Education Research</p>
          <a
            href="/archives"
            className="mt-6 inline-block bg-green-600 text-gray-200 px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Browse Journals
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-center lg:mx-4 py-10 md:mx-0 text-black">
        <h2 className="text-xl lg:text-3xl font-bold text-green-600">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
            <span className="text-green-700 text-4xl mb-3">
              <FaBookOpen />
            </span>
            <h3 className="text-lg lg:text-xl font-bold text-white">Open Access</h3>
            <p className="text-gray-200 mt-2">All research papers are freely available to everyone.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
            <span className="text-green-700 text-4xl mb-3">
              <FaRocket />
            </span>
            <h3 className="text-lg lg:text-xl font-bold text-white">Publish When Verified</h3>
            <p className="text-gray-200 mt-2">Admin approval is required before publishing after manuscript is submitted.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
            <span className="text-green-700 text-4xl mb-3">
              <FaSearch />
            </span>
            <h3 className="text-lg lg:text-xl font-bold text-white">Search & Filter</h3>
            <p className="text-gray-200 mt-2">Find journals by category, department, or publication date.</p>
          </div>
        </div>
      </section>

            {/* Featured Journals */}
            <section className="py-6 md:mx-0 text-black">
                <h2 className="text-xl lg:text-3xl md-10 font-bold text-center text-green-600 mb-10">Latest Research Journals</h2>
                {loading && <p className="text-center text-gray-500">Loading journals...</p>}
                {!loading && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredJournals.map((journal: Journal, index) => (
                            <JournalCard
                                key={index}
                                id={journal._id!}
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
            </section>
        </div>
    );
}

