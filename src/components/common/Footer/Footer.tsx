import Link from "next/link";
import React from "react";
import { FaFacebook, FaGoogle, FaPinterest, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1b1b1b] dark:bg-gray-100 text-gray-50 dark:text-gray-900">
        <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400 dark:divide-gray-600">
          <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            <li>About Books</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
          <div className="flex flex-col justify-center pt-6 lg:pt-0">
            <div className="flex justify-center space-x-4">
              <Link
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white dark:bg-violet-600 text-gray-900 dark:text-gray-50"
              >
           <GrInstagram />
              </Link>
              <Link
                rel="noopener noreferrer"
                href="#"
                title="Pinterest"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white dark:bg-violet-600 text-gray-900 dark:text-gray-50"
              >
              <FaPinterest />
              </Link>
              <Link
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white dark:bg-violet-600 text-gray-900 dark:text-gray-50"
              >
             <FaTwitter />
              </Link>
              <Link
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white dark:bg-violet-600 text-gray-900 dark:text-gray-50"
              >
              <FaFacebook />
              </Link>
              <Link
                rel="noopener noreferrer"
                href="#"
                title="Gmail"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white dark:bg-violet-600 text-gray-900 dark:text-gray-50"
              >
              <FaGoogle />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
