import React from 'react'
import Image from 'next/image';

const SingleProductsPage = () => {
  return(
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image src={"/image/image@2x.svg"} alt='hero-image' width={675} height={607}/>
    
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
      Library Stool 
        <br className="hidden lg:inline-block" />
        Chair
      </h1>
      <button className="ml-4 inline-flex text-white bg-[#113a52] border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          $20 00 USD
        </button>
      <p className="mb-8 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <br className="hidden lg:inline-block" />
       Nullam tincidunt erat enim. Lorem ipsum dolor sit amet,
       <br className="hidden lg:inline-block" />
       consectetur adipiscing
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#13444d] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Add To Cart
        </button>
        
      </div>
    </div>
  </div>
  <div className='mt-4 '>
      <Image src={"/image/product carousel.svg"} alt='hero-image' width={1747} height={409}/>
  </div>
</section>

  

  )
}

export default SingleProductsPage;