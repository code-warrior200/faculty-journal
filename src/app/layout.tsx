import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../app/styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Faculty Journals",
  description: "Explore, read, and submit research manuscripts",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className=" bg-green-50 text-gray-900">
        <Navbar />
        <main className="container mt-5 mx-auto p-6 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
