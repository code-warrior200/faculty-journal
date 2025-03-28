"use client";
import Image from "next/image";

const boardMembers = [
  {
    name: "Prof. John Doe",
    position: "Chief Editor",
    department: "Physics",
    image: "/editor1.jpg", 
    bio: "Expert in quantum mechanics with 20+ years of research experience."
  },
  {
    name: "Dr. Jane Smith",
    position: "Deputy Editor",
    department: "Biology",
    image: "/editor2.jpg",
    bio: "Specialist in microbiology and genetic engineering research."
  },
  {
    name: "Dr. Ahmed Hassan",
    position: "Associate Editor",
    department: "Computer Science",
    image: "/editor3.jpg",
    bio: "AI researcher focused on machine learning and neural networks."
  },
  {
    name: "Dr. Sarah Johnson",
    position: "Editorial Board Member",
    department: "Environmental Science",
    image: "/editor4.jpg",
    bio: "Studies the impact of climate change on marine ecosystems."
  },
  {
    name: "Prof. Michael Brown",
    position: "Editorial Board Member",
    department: "Chemistry",
    image: "/editor5.jpg",
    bio: "Specialist in organic chemistry and drug synthesis."
  },
  {
    name: "Dr. Emily White",
    position: "Editorial Board Member",
    department: "Mathematics",
    image: "/editor6.jpg",
    bio: "Focuses on applied mathematics in computational science."
  },
  {
    name: "Prof. Daniel Lee",
    position: "Editorial Board Member",
    department: "Astronomy",
    image: "/editor7.jpg",
    bio: "Researches exoplanets and deep space exploration."
  },
  {
    name: "Dr. Sophia Wilson",
    position: "Editorial Board Member",
    department: "Physics",
    image: "/editor8.jpg",
    bio: "Studies theoretical physics and cosmology."
  },
  {
    name: "Dr. James Carter",
    position: "Editorial Board Member",
    department: "Biotechnology",
    image: "/editor9.jpg",
    bio: "Focuses on bioinformatics and genetic sequencing."
  },
  {
    name: "Dr. Olivia Martinez",
    position: "Editorial Board Member",
    department: "Statistics",
    image: "/editor10.jpg",
    bio: "Expert in statistical modeling and data science."
  },
  {
    name: "Prof. William Taylor",
    position: "Editorial Board Member",
    department: "Neuroscience",
    image: "/editor11.jpg",
    bio: "Researches brain function and neurodegenerative diseases."
  },
  {
    name: "Dr. Ethan Davis",
    position: "Editorial Board Member",
    department: "Geology",
    image: "/editor12.jpg",
    bio: "Studies Earth's crustal movements and natural disasters."
  },
  {
    name: "Dr. Amelia Clark",
    position: "Editorial Board Member",
    department: "Physics",
    image: "/editor13.jpg",
    bio: "Works on condensed matter physics and superconductors."
  },
  {
    name: "Dr. Nathaniel Lopez",
    position: "Editorial Board Member",
    department: "Engineering",
    image: "/editor14.jpg",
    bio: "Develops sustainable energy solutions for the future."
  },
  {
    name: "Prof. Lisa Robinson",
    position: "Editorial Board Member",
    department: "Medicine",
    image: "/editor15.jpg",
    bio: "Leads research on cancer treatment and drug development."
  }
];

export default function EditorialBoard() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">Editorial Board</h1>
        <p className="text-center text-gray-700 text-lg mb-12">
          Meet the esteemed scholars and experts leading the Faculty of Science & Science Education Journals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="w-24 h-24 mx-auto rounded-full border-4 border-gray-300"
              />
              <h2 className="text-xl font-bold text-center mt-4">{member.name}</h2>
              <p className="text-green-600 text-center text-sm">{member.position}</p>
              <p className="text-gray-500 text-center text-sm mb-3">{member.department} Department</p>
              <p className="text-gray-700 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
