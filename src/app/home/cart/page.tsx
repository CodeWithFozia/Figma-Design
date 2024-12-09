import React from 'react'
import Image from 'next/image';

const  CartPage = () => {
  return (
    <div className=' lg:mt-2 lg:flex space-y-4'>
<Image src={"/image/Frame.svg"} alt='hero-image' width={933} height={211}/>
<Image src={"/image/Frame (1).svg"} alt='hero-image' width={750.67} height={295}/>

    </div>
  )
}

export default CartPage;