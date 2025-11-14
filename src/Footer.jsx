import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-white">Ilearn Academy</h2>
          <p className="text-gray-400 max-w-xs">
            Empowering students with free past questions, instant scoring, and
            targeted practice for O'level exams.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.facebook.com/share/1BLQv9mCV4/"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ilearndemy?igsh=aW50eWJrMHZmZ3Nr
"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://chat.whatsapp.com/HBHfiVZLpdPFahNer3u6YL"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/question"
                className="hover:text-white transition-colors"
              >
                Past Questions
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Ilearn Academy. All rights reserved.
      </div>
    </footer>
  );
}
