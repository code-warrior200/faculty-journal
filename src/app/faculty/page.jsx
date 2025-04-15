'use client'
import { FaBookOpen, FaRocket, FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Science SVG Background */}
      <div className="absolute inset-0 bg-[url('/science.jpg')] bg-cover opacity-10"></div>

      {/* Hero Section with Background Image */}
      <section className="text-center mt-22 py-16 text-green-700 mx-4 max-w-full relative bg-[url('/science.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="bg-gray-100 opacity-85 p-10 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold">Faculty of Science Journal of Scientific Research.</h1>
          <p className="mt-4 font-bold text-lg">Fedral University Of Eduction Zaria (FUEZ) & Nigeria Journal Of Science Education Research</p>
          <a
            href="/journals"
            className="mt-6 inline-block bg-green-600 text-gray-200 px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Browse Journals
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-center mx-4 mt-48 md:mx-0">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
            <span className="text-green-700 text-4xl mb-3">
              <FaBookOpen />
            </span>
            <h3 className="text-xl font-bold">Open Access</h3>
            <p className="text-gray-600 mt-2">All research papers are freely available to everyone.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
            <span className="text-green-700 text-4xl mb-3">
              <FaRocket />
            </span>
            <h3 className="text-xl font-bold">Publish When Verified</h3>
            <p className="text-gray-600 mt-2">Admin approval is required before publishing after manuscript is submitted.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
            <span className="text-green-700 text-4xl mb-3">
              <FaSearch />
            </span>
            <h3 className="text-xl font-bold">Search & Filter</h3>
            <p className="text-gray-600 mt-2">Find journals by category, department, or publication date.</p>
          </div>
        </div>
      </section>

      {/* Featured Journals */}
      <section className="mx-4 mt-26 md:mx-0">
        <h2 className="text-3xl md-10 font-bold text-center">Latest Research Journals</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            { title: "Advances in Quantum Physics", category: "Physics", description: "Exploring quantum mechanics and its applications." },
            { title: "AI in Healthcare", category: "Computer Science", description: "Impact of artificial intelligence in medical research." },
            { title: "Climate Change & Ecosystems", category: "Environmental Science", description: "How climate change affects biodiversity." },
            { title: "Modern Organic Synthesis", category: "Chemistry", description: "Innovative approaches in organic compound creation." },
            { title: "Mathematical Modelling in Biology", category: "Mathematics", description: "Applications of mathematics in biological systems." },
            { title: "Renewable Energy Technologies", category: "Engineering", description: "Advancements in sustainable energy sources and implementation." },
          ].map((journal, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow transition hover:shadow-lg">
              <h3 className="text-xl font-bold">{journal.title}</h3>
              <p className="text-sm text-gray-600">{journal.category}</p>
              <p className="mt-2">{journal.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
