import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className='overflow-x-hidden'>
         
         <div className='lg:mt-[15px] lg:ml-[944px] '>
                <a href='tel:8085550111' className='text-black  hover:text-black hidden md:block'>
                    Contact:
                    (808)-555-0111
                </a>
                 </div>

        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        WELCOME TO CHAIRY
        <br className="hidden lg:inline-block" />
        
      </h1>
      <p className="mb-8 leading-relaxed text-3xl font-bold text-black">
      Best Furniture
      <br className="hidden lg:inline-block" />
      Collection for your
      <br className="hidden lg:inline-block" />
      interior.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <Image src={"/image/Product Image@2x-1.svg"} alt='hero-image' width={434} height={584}/>
    </div>
  </div>
</section>

     <div>
      <div className='lg:flex space-x-20 justify-center'>
      <Image src={"/image/Logo@2x (1).svg"} alt='hero-image' width={85} height={87}/>
      <Image src={"/image/Logo@2x (2).svg"} alt='hero-image' width={107} height={109}/>
      <Image src={"/image/Logo@2x (3).svg"} alt='hero-image' width={135} height={139}/>
      <Image src={"/image/Logo@2x (4).svg"} alt='hero-image' width={63} height={65}/>
      <Image src={"/image/Logo@2x (5).svg"} alt='hero-image' width={98} height={101}/>
      <Image src={"/image/Logo@2x (6).svg"} alt='hero-image' width={113} height={115}/>
      <Image src={"/image/Logo@2x (7).svg"} alt='hero-image' width={84} height={87}/>
      </div>
     </div>

       <div className='w-[1920px] h-[461px]'>
        <div>
          <h1 className="title-font sm:text-4xl justify-center font-semibold ml-[68px]  text-3xl mb-4  text-gray-900">
            Featured Products
          </h1>
        </div>
        <div className='flex space-x-2 justify-center items-center ml-[-475px] mr-[112px]'>
        <Image src={"/image/Products.svg"} alt='hero-image' width={312} height={377}/> 
        <Image src={"/image/Products (1).svg"} alt='hero-image' width={312} height={377}/>
        <Image src={"/image/Products (2).svg"} alt='hero-image' width={312} height={377}/>
        <Image src={"/image/Products (4).svg"} alt='hero-image' width={312} height={377}/>
        </div>
       </div>
        <div className='title-font sm:text-4xl justify-center font-semibold ml-[68px]  text-3xl mb-4  text-gray-900 '>
          <h1 >
            Top Categories
          </h1>
           </div>
           <div className='flex space-x-2 justify-center items-center mt-[44px]'>
           <Image src={"/image/Category (5).svg"} alt='hero-image' width={424} height={424}/>
           <Image src={"/image/Category (6).svg"} alt='hero-image' width={424} height={424}/>
           <Image src={`/image/Category (7).svg`} alt='hero-image' width={424} height={424}/>
           </div>
       <div>
       <h1 className='w-[648px] h-[52px] flex font-semibold'>
       Explore new and popular styles
       </h1>
        </div>
        
        <div className='flex space-x-2 justify-center items-center ml-[-75px]'>
        <Image src={"/image/hot-category (3).svg"} alt='hero-image' width={1320} height={648}/>
        
        </div>
       
     </div>
    
  )
}

export default HomePage;