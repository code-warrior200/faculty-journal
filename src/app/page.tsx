'use client'
import React from 'react';

export default function Home() {
  return (
    <div className="relative overflow-hidden mt-15 lg:mt-20">

      {/* Hero Section */}
      <section className="relative py-10 h-[200px] md:h-[650px] bg-[url('/image/FUEZ-1.jpg')] flex items-center justify-center">
        {/* <img
          src="/image/FUEZ-1.jpg"
          alt="Discover New Frontiers"
          className="absolute inset-0 bg-cover bg-center object-cover"
          style={{ filter: 'brightness(0.5)' }} // dark overlay effect 
        /> */}
        <div className="absolute inset-0 bg-black/50" /> {/* dark overlay */}
        <div className="relative z-10 text-center px-6 md:px-12">
          <h1 className="text-white text-2xl lg:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg animate-fade-up">
            Discover New Frontiers
          </h1>
          <p className="text-green-200 mt-6 text-sm lg:text-lg md:text-2xl animate-fade-up delay-150">
            Innovate, Connect, and Excel with Our Global Community.
          </p>
          <a
            href="/faculty"
            className="mt-2 mb-8
             inline-block bg-green-600 text-gray-200 px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Learn More
          </a>
          {/* <button className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 transition rounded-full text-white text-lg font-semibold shadow-lg animate-fade-up delay-300">
            Explore Programs
          </button> */}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="px-0 md:px-12 pt-20 max-w-7xl mx-auto">
        <h2 className="text-xl lg:text-3xl md:text-5xl font-bold text-center text-green-600 mb-16">
          Meet Our Leadership
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: 'Dr. Suleiman Balarabe',
              role: 'Acting Vice Chancellor',
              image: '/image/vcacting.jpg',
              bio: 'A visionary leader committed to academic excellence and innovation.',
            },
            {
              name: '...',
              role: 'Registrar',
              image: '/image/faculty-officer.jpg',
              bio: 'Oversees the university’s administrative affairs with transparency and efficiency.',
            },
            {
              name: 'Dr. Saheed Gbolahan Adewusi',
              role: 'Dean, Faculty of Science',
              image: '/image/dean.jpg',
              bio: 'Leads the Faculty of Science with a focus on research and student success.',
            },
            {
              name: 'Mallam Sani Abdulahi Manjo',
              role: 'Faculty Officer',
              image: '/image/faculty-officer.jpg',
              bio: 'Manages the faculty’s daily operations, ensuring smooth coordination.',
            },
          ].map((person, index) => (
            <div
              key={index}
              className="group bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center flex flex-col items-center hover:-translate-y-2"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-28 h-28 rounded-full object-cover shadow-md mb-6 border-4 border-green-500 group-hover:border-green-600 transition"
              />
              <h3 className="text-lg lg:text-xl font-semibold text-white">{person.name}</h3>
              <p className="text-green-700 font-medium">{person.role}</p>
              <p className="text-gray-300 text-sm mt-4">{person.bio}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
