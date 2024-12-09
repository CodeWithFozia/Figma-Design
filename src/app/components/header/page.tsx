import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { LuShoppingCart } from 'react-icons/lu';


function Header  ()  {
  return (
    <div>
    <header className='bg-gray-100 hidden sm:block shadow-md'>
    
        <div className='bg-[#232743] text-white flex flex-col ml:mr-[-22px] justify-center  items-center text-right'>
            Free Shipping On All Orders Overs $50
        
        </div>
        
        <div className='container mx-auto flex justify-between items-center px-4 py-3'>
            {/* Logo */}
            <div className='flex items-center space-x-2'>
            <Image src={"/image/Logo Icon@2x.svg"} alt='hero-image' width={40} height={40}/>
                <span className='text-xl font-bold text-gray-800'>Comforty</span>
            </div>
            {/* Navigation */}
            <nav className='hidden md:flex space-x-6'>
                <Link href="/home" className='text-black hover:text-black'>Home</Link>
                <Link href="/home/productpage" className='text-black hover:text-black'>Product</Link>
                <Link href="/home/singleproductpage" className='text-black hover:text-black'>Pages</Link>
                <Link href="/home/about" className='text-black hover:text-black'>About</Link>

                
                 <div className='relative group'>
                    <button>shop</button>
                    <div className='absolute hidden group-hover:block rounded shadow-md'>
                    <Link href="/home/cart" className='text-black block px-2 py-4'>Cart</Link>
                    <Link href="/home/faq" className='block px-2 py-4'>Faq</Link>
                    <Link href="/home/discountpage" className='block px-2 py-4'>Discount Page</Link>
                 </div>
                 </div>


            </nav>
            {/* Contact and Cart */}

            <div className='mt-1 pt-4  lg:mr-[-224px]'>
                    <Image src={"/image/User Links.svg"} alt='hero-image' width={120} height={44}/>
                    </div >
                  
               
                <div className=' flex flex-8xl py-4  space-x-4  lg:mr-[+124px] '>
                    
                <button className='relative text-black hover:text-black'>
                    
                    <span className='absolute-top-2-right-2 bg-[#FOF2F3] text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
                    
                    </span>
                </button>
            </div>
            {/* Mobile Menu Button */}
            <button className='md:hidden text-black hover:text-black'>
                <span className='material-icons'>menu</span>
            </button>
        </div>
        

    </header>

         

         <header  className='bg-white shadow-md lg:hidden'>
            <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
                {/*Left Section:Brand*/}
                <h1 className='text-2xl font-bold'>
                    Comforty
                </h1>

                {/*Right Section:Icons*/}
                <div className='flex-item-center space-x-4'>
                    {/* Search Icon */}
                    <button className='h-6 w-6 '>
                      <LuShoppingCart/>
                    </button>
                </div>
                {/* Navigation Bar*/}
                <div className='bg-gray-100 border-t border-gray-200 lg:hidden'>
                    <input type="checkbox"
                    id='menu-toggle'
                    className='hidden peer'/>
                    <label 
                    htmlFor='menu-toggle'
                    className='block text-black px-4 py-3 cursor-pointer lg:hidden'>
                        <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        >
                            <path 
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h116'
                            />
                        </svg>
                    </label>
                    <nav
                    className='peer-checked:block hidden lg:flex flex-col lg:flex-row px-4'>
                        <Link href="/home"
                        className='block py-2 text-black hover:text-gray-600'>
                            Home
                        </Link>
                        <Link href="/home/about"
                        className='block py-2 text-black hover:text-gray-600'>
                            About
                        </Link >
                        <Link href="/home/contact"
                        className='block py-2 text-black hover:text-gray-600'>
                            Contact
                        </Link>
                        {/* Shope Dropdown*/}

                        <div className='group relative'>
                            <button className='block py-2 text-black hover:text-gray-600'>
                                Shop
                            </button>
                            <div className='absolute left-0 w-40 bg-white border border-gray-200 hidden group-hover:block'>
                              <Link href="/home/cart "
                              className='block px-4 py-2 hover:bg-gray-100'>
                                Cart
                              </Link>
                              <Link href="/home/faq"
                              className='block px-4 py-2 hover:bg-gray-100'>
                                Faq
                              </Link>
                              <Link href="/home/productpage"
                              className='block px-4 py-2 hover:bg-gray-100'>
                                Product Page
                              </Link>
                              <Link href="/home/discountpage"
                              className='block px-4 py-2 hover:bg-gray-100'>
                                Discount Page
                              </Link>
                              <Link href="/home/singleproductpage"
                              className='block px-4 py-2 hover:bg-gray-100'>
                                Single Product Page
                              </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
         </header>          
    </div>
  )
}

export default Header;