import React from 'react'
import Image from 'next/image';


const Contact = () => {
  return (

       <div>
        <div>

      <section className="text-gray-600 body-font relative">

<div className='text-center'>
         <h2 className="text-gray-900 text-lg mb-1 font-bold title-font">
      Get In Touch With Us
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
      For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>
       </div>

  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      
      <div className="bg-white relative flex flex-wrap lg:py-[244px] py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6 lg:mt-[-124px] lg:ml-[6px]">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            Address
          </h2>
          <p className="mt-1">
          236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            Phone
          </h2>
          <p className='mt-1'>
          Mobile: +(84) 546-6789
          Hotline: +(84) 456-6789
          </p>
          <a className="text-indigo-500 leading-relaxed"></a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            Working Time
          </h2>
          <p className="leading-relaxed">
          Monday-Friday: 9:00 - 22:00
          Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
     
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
        Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
        Subject
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>



      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-[#051d1d] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Button
      </button>
      
    </div>
  </div>
</section>

    </div>

<div>
<Image src={"/image/Frame 161 (1).svg"} alt='hero-image' width={1320} height={270}/>
</div>

    <div>

    </div>


    </div>
  )
}

export default Contact;