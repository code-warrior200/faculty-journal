import { Mail, MapPin } from 'lucide-react';
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <div className="flex items-center space-x-2 mb-2">
            <Mail size={16} className="text-green-400" />
            <span className="text-gray-300">fuezjsr@gmail.com</span>
          </div>
          {/* <div className="flex items-center space-x-2 mb-2">
            <Phone size={16} className="text-green-400" />
            <span className="text-gray-300">+234 812 345 6789</span>
          </div> */}
          <div className="flex items-start space-x-2">
            <MapPin size={16} className="text-green-400 mt-1" />
            <span className="text-gray-300 leading-relaxed">
              Faculty of Sciences,<br />
              Fedral University of Education Zaria, Kaduna State Nigeria
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
            <li><Link href="/departments" className="text-gray-400 hover:text-white transition">Departments</Link></li>
            <li><Link href="/archives" className="text-gray-400 hover:text-white transition">Journals</Link></li>
            <li><Link href="/faculty" className="text-gray-400 hover:text-white transition">Faculty Journal</Link></li>
          </ul>
        </div>

        {/* Footer Note */}
        <div className="text-gray-400 text-center md:text-left mt-6 md:mt-0 flex flex-col justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Faculty of Science & Science Education Journals.
            <br className="hidden md:block" /> All Rights Reserved.
          </p>
          <p className="mt-4 text-xs text-gray-600">
            Designed with ❤️ for academic excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
