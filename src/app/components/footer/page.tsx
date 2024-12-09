import React from 'react'
import Image from 'next/image';
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


function Footer  () {
  return (
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 ml-[44px]">
          Comforty
          </h2>
          <div className='mt-[-34px]'>
        <Image src={"/image/Logo Icon (2).svg"} alt='hero-image' width={40} height={40}/>
         </div>
        <p>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
        Cras egestas purus </p>
        <div className='flex justify-center lg:ml-[-170px] space-x-2 mt-3'>
        <BsFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn />
        </div> 


      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Sofa</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Armchair</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Wing Chair</a>
          </li>
          <li>
            <a className="text-green-600 hover:text-green-800 underline">Desk Chair</a>
          </li>
          <li>
            <a className='text-gray-600 hover:text-gray-800'>Wood Chair</a>
          </li>
          <li>
            <a className='text-gray-600 hover:text-gray-800'>Park Bench</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          SUPPORT
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Help & Support</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Teams & Conditions</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Help</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          NEWSLETTER
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-600"
            >
              
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#113953] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Subscribe
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
          Lorem ipsum dolor sit amet,consecteture adipiscing elit. Nullam tincidunt erat enim.
        </p>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
  
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
      @ 2021 - Blogy - Designed & Develop by Zakirsoft
        <a
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-gray-600 ml-1"
          target="_blank"
        >
          
        </a>
      </p>
  
    </div>
  </div>
</footer>

    

  )
}

export default Footer;
    
