/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { uploadJournalApi } from '@/service/journel-service';
import FormInput from '@/components/shared/input';
import FormTextarea from '@/components/shared/textarea';
import FormFileUpload from '@/components/shared/upload-input';
import { toast } from 'react-toastify';

export default function Submit() {
  const [formData, setFormData] = useState<{
    title: string;
    authorName: string;
    description: string;
    department: string;
    fileType: string;
    journalPoster: File | null;
    journalFile: File | null;
  }>({
    title: "",
    authorName: "",
    description: "",
    department: "",
    fileType: "",
    journalPoster: null,
    journalFile: null,
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    form.append('title', formData.title);
    form.append('authorName', formData.authorName);
    form.append('description', formData.description);
    form.append('department', formData.department);
    form.append('fileType', formData.fileType || "pdf");

    if (formData.journalPoster) {
      form.append('journalPoster', formData.journalPoster);
    }

    if (formData.journalFile) {
      form.append('journalFile', formData.journalFile);
    }

    try {
      const response = await uploadJournalApi(form);
      console.log(response);

      if (response?.journal) {
        setFormData({
          title: "",
          authorName: "",
          description: "",
          department: "",
          fileType: "",
          journalPoster: null,
          journalFile: null,
        });

        toast.success("Journal submitted successfully!");
      }
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleJournalFileChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileType = file.name.split(".").pop();
      setFormData((prev) => ({
        ...prev,
        journalFile: file,
        fileType: fileType?.toLowerCase() || "pdf",
      }));
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800">📄 Submit Your Journal</h1>
      <p className="text-center text-gray-500 mt-2">
        Fill in the details below and upload your journal.
      </p>

      <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
        <FormInput
          label="Title"
          type="text"
          placeholder="Enter journal title"
          required
          value={formData.title}
          onChange={(e: any) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
        />

        <FormInput
          label="Author Name"
          type="text"
          placeholder="Enter your name"
          required
          value={formData.authorName}
          onChange={(e: any) => setFormData((prev) => ({ ...prev, authorName: e.target.value }))}
        />

        <FormTextarea
          label="Description"
          placeholder="Enter a description"
          required
          rows={4}
          value={formData.description}
          onChange={(e: any) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
        />

        <div>
          <label className="block text-gray-700 font-medium">Department</label>
          <select
            required
            value={formData.department}
            onChange={(e) => setFormData((prev) => ({ ...prev, department: e.target.value }))}
            className="mt-2 w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Department</option>
            <option value="Science">Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Arts">Arts</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <FormFileUpload
          label="Upload Poster (Image)"
          accept="image/*"
          required
          onChange={(e: any) => setFormData((prev) => ({ ...prev, journalPoster: e.target.files?.[0] || null }))}
        />

        <FormFileUpload
          label="Upload Journal (PDF/DOCX)"
          accept=".pdf,.doc,.docx"
          required
          onChange={handleJournalFileChange}
        />

        {formData.fileType && (
          <p className="mt-2 text-sm text-gray-500">
            Detected file type: <span className="font-semibold">{formData.fileType}</span>
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 text-white py-3 rounded-lg text-lg hover:bg-green-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Submit Journal"}
        </button>
      </form>
    </div>
  );
}
