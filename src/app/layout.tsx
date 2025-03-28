import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../app/styles/globals.css";

export const metadata = {
  title: "Faculty Journals",
  description: "Explore, read, and submit research manuscripts",
};

export default function RootLayout( {children} ) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="container mx-auto p-6 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
