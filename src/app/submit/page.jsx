"use client";
import { useState } from "react";

export default function Submit() {
  const [formData, setFormData] = useState({ 
    title: "", 
    author: "", 
    file: null 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("author", formData.author);
    data.append("file", formData.file);

    await fetch("/api/submit", {
      method: "POST",
      body: data,
    });

    alert("Manuscript submitted successfully!");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800">📄 Submit Your Manuscript</h1>
      <p className="text-center text-gray-500 mt-2">Fill in the details below and upload your manuscript.</p>

      <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-medium">Title</label>
          <input 
            type="text" 
            placeholder="Enter manuscript title" 
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
            onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
          />
        </div>

        {/* Author Name Input */}
        <div>
          <label className="block text-gray-700 font-medium">Author Name</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
            onChange={(e) => setFormData({ ...formData, author: e.target.value })} 
          />
        </div>

        {/* Author Email Input
          <div>
          <label className="block text-gray-700 font-medium">Author Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          />
        </div>
        */}
        

        {/* File Upload */}
        <div>
          <label className="block text-gray-700 font-medium">Upload Manuscript (PDF/DOCX)</label>
          <input 
            type="file" 
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-white file:bg-green-500 hover:file:bg-green-600 cursor-pointer" 
            required 
            accept=".pdf,.doc,.docx" 
            onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })} 
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-green-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition duration-300"
        >
          Submit Manuscript
        </button>
      </form>
    </div>
  );
}
