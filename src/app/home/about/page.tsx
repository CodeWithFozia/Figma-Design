import React from 'react'
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className='wrapper overflow-x-hidden'>
    <div className='mt-2 justify-center lg:flex space-y-6 gap-3 text-2xl  top-[303px] left-[101px] lg:mt-4  text-mr-[-22px] text-right'>
       <Image src={"/image/Text Block.svg"} alt='hero-image' width={472} height={478}/>
       <Image src={"/image/Image Block.svg"} alt='hero-image' width={470} height={465}/>
       
       
    </div>

    <div className='text-center px-4 py-14'>
      <h1 className='text-4xl font-bold'>What makes our Brand Different</h1>
    </div>

    <div className='mt-3  gap-4 justify-between'>
       <Image src={"/image/Group 163@2x.svg"} alt='hero-image' width={1320} height={244}/>
    </div>

    <div className='px-4 py-14'>
      <h1 className='text-4xl font-bold'>Our Popular Products</h1>
    </div>

    <div className='flex space-x-4 justify-between'>
       <Image src={"/image/Product Card@2x.svg"} alt='hero-image' width={630} height={462}/>
       <Image src={"/image/product card about.svg"} alt='hero-image' width={305} height={462}/>
       <Image src={"/image/productabout2.svg"} alt='hero-image' width={305} height={462}/>
       </div>

    </section>
  )
}

export default AboutUs;