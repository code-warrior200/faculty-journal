'use client'
import { useEffect, useState } from 'react';

const carouselImages = [
  {
    src: '/image/FUEZ-1.jpg',
    caption: 'Discover New Frontiers',
  },
  {
    src: '/image/FUEZ-1.jpg',
    caption: 'Innovate Through Science',
  },
  {
    src: '/image/FUEZ-1.jpg',
    caption: 'Connect With Global Scholars',
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-20 relative overflow-hidden pb-20">

      {/* Carousel Section */}
      <section className="relative h-[450px] mt-14 md:h-[600px] w-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  flex items-center justify-center">
              <h2 className="text-white bg-green-600 bg-opacity-80 px-6 py-3 rounded-full text-2xl md:text-3xl font-extrabold shadow-lg animate-fade-in">
                {image.caption}
              </h2>
            </div>
          </div>
        ))}
      </section>

      {/* University Leadership Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Meet Our Leadership</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: 'Dr. Suleiman Balarabe',
              role: 'Acting Vice Chancellor',
              image: '/image/VC-acting.jpg',
              bio: 'A visionary leader committed to academic excellence and innovation.',
            },
            {
              name: 'Dr. Halima S. Bello',
              role: 'Registrar',
              image: '/image/Resgistrar.jpg',
              bio: "Oversees the university’s administrative affairs with transparency and efficiency.",
            },
            {
              name: 'Prof. John I. Okoye',
              role: 'Dean, Faculty of Science',
              image: '/image/dean.jpg',
              bio: 'Leads the Faculty of Science with a focus on research and student success.',
            },
            {
              name: 'Mrs. Grace N. Aliyu',
              role: 'Faculty Officer',
              image: '/image/faculty-officer.jpg',
              bio: 'Manages the faculty’s daily operations, ensuring smooth coordination.',
            },
          ].map((person, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-28 h-28 rounded-full object-cover shadow-md mb-4 ring-2 ring-green-500"
              />
              <h3 className="text-lg font-semibold text-gray-900">{person.name}</h3>
              <p className="text-green-700 font-medium">{person.role}</p>
              <p className="text-gray-600 text-sm mt-2">{person.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
