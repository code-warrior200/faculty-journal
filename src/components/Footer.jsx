export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">© {new Date().getFullYear()} Faculty of Science & Science Education Journals. All Rights Reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="/" className="text-gray-400 hover:text-white transition">Home</a>
            <a href="/departments" className="text-gray-400 hover:text-white transition">Departments</a>
            <a href="/journals" className="text-gray-400 hover:text-white transition">Journals</a>
            <a href="/faculty" className="text-gray-400 hover:text-white transition">Faculty Journal</a>
          </div>
        </div>
      </footer>
    );
  }
  