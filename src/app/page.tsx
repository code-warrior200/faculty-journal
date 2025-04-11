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
    <div className="space-y-12 relative overflow-hidden">
      
      {/* Carousel Section */}
      <section className="relative h-[400px] mt-15 md:h-[500px] w-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              <h2 className="text-gray-800 bg-gray-100 rounded-b-full text-3xl md:text-4xl font-bold text-center px-4">
                {image.caption}
              </h2>
            </div>
          </div>
        ))}
      </section>
        {/* University Leadership Section */}
        <section className="mx-4 md:mx-0 py-12">
          <h2 className="text-3xl font-bold text-center mb-10">Meet Our Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Dr. Suleiman Balarabe',
                role: 'Acting Vice Chancellor',
                image: '/image/VC-acting.jpg',
                bio: 'Dr. Suleiman Balarabe is a visionary leader committed to academic excellence and innovation.'
              },
              {
                name: 'Dr. Halima S. Bello',
                role: 'Registrar',
                image: '/image/Resgistrar.jpg',
                bio: 'Dr. Bello oversees the university’s administrative affairs with transparency and efficiency.'
              },
              {
                name: 'Prof. John I. Okoye',
                role: 'Dean, Faculty of Science',
                image: '/image/dean.jpg',
                bio: 'Prof. Okoye leads the Faculty of Science with a focus on research and student success.'
              },
              {
                name: 'Mrs. Grace N. Aliyu',
                role: 'Faculty Officer',
                image: '/image/faculty-officer.jpg',
                bio: 'Mrs. Aliyu manages the faculty’s daily operations, ensuring smooth coordination.'
              }
          ].map((person, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6 text-center">
              <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl text-gray-800 font-bold">{person.name}</h3>
              <p className="text-green-700 font-semibold">{person.role}</p>
              <p className="text-gray-800 text-sm mt-2">{person.bio}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
