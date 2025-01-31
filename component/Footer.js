import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <hr className="border-gray-300 dark:border-gray-700" />
      <footer className="max-w-screen-xl mx-auto p-6 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Travellofia
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Explore the world with us. Your journey starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/about" className="hover:text-blue-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/PrivacyPolicy" className="hover:text-blue-500 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/licensing" className="hover:text-blue-500 transition">
                  Licensing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Subscribe to our Newsletter
            </h3>
            <form className="mt-4 flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring focus:ring-blue-400"
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 sm:ml-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            © 2023{" "}
            <Link href="/" className="hover:underline text-blue-600">
              Travellofia
            </Link>
            . All Rights Reserved.
          </span>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              <FaFacebookF size={20} />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              <FaTwitter size={20} />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
