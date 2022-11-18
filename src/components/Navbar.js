import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 px-2 sm:px-4  rounded hidden md:flex">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <span className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-2xl flex items-center">
            Mahika Garg
          </a>
        </span>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center text-lg">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          {/* <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a> */}
          <a
            href="./resume.pdf"
            download
            className="mr-5 hover:text-white">
            Resume
          </a>

        </nav>
        <a href='https://www.linkedin.com/in/mahika-garg-7358b0228/' className='mr-5 text-lg hover:text-white dark:hover:text-white'><BsLinkedin /></a>
        <a href='https://github.com/Mahikagarg09' className='mr-5 text-lg hover:text-white dark:hover:text-white'><FaGithub /></a>
        <a href='https://twitter.com/MaHikA_GarG_23' className='mr-5 text-lg hover:text-white dark:hover:text-white'><FaTwitter /></a>
        <a href="https://www.instagram.com/_mahika_garg_/" className='mr-5 text-lg hover:text-white dark:hover:text-white'><FaInstagram /></a>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-lg mt-4 md:mt-0">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
